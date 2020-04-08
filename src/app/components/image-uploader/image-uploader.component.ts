import { Component,  OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UploadService } from '../../services/upload.service';

import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {


  imagePreviews:  any = [];
  files:          any = [];
  filesInput:     any = [];
  // Empty staring array to comtrol switching between grid view layputs.
  templateGrids:  any = [""];


  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  isUploadingStatus(objId) {
    if (typeof this.files[objId] == 'object') {
      // check if we're uploading the image
      if (this.files[objId].inProgress == true) {
        return true;
      }
    }

    return false;
  }

  selectedfileTitle(grid) {

    if (this.files[grid] == 'undefined') {
      return null;
    }

    this.files.forEach(file => {
      if (file.id == grid) {
         return file.filename; 
      }
    });

  }


  
  
  toggleTemplates(size: number): void {
    this.templateGrids = []; // Reset current layout.

    this.files = []; // Clear any currently selected file.

    for(let index = 0; index < size; index++)
    {
      // we just need to create x amount of elements for the grid layout.
      // values pushed in this array are not important nor are used.

      // @todo: implement an effecient way of controlling the grid layout.

      this.templateGrids.push(index); 
    }
  }


  // Returns classes to be used to style the layout depending
  // on the selected grid layout.
  gridHacks(): string {
    const blocks = this.templateGrids.length;

    switch(blocks) {
      case 3: return 'grd3'; 
      case 1: return 'grd1'; 
      case 2: return 'grd2'; 
    }
  }


  // Get progress.
  loadProgress(grid) {

    this.files.forEach(file => {
      file.inProgress = true;

      console.log("checking progress...");


      if ((file.id == grid)) { 

        console.log("retuning " + file.progress + "%");

        return file.progress;

      }
    }); 
    
  }


  // Retrieves image viewable image link (data image on this case).
  previewSrc(grid) {

    if (typeof this.imagePreviews[grid] == 'undefined') {
      return "https://via.placeholder.com/200.png";
    }

    if (typeof this.imagePreviews[grid]['url'] == 'undefined') {
      return "https://via.placeholder.com/200.png";
    }
    return this.imagePreviews[grid]['url'];

  }

  // Triggered when the user changes / selects a file 
  // we pass the event and id to be able to map back the 
  // images original grid.
  onSelect(input, grid): void {

    // grid += 1; // may not need this.

    const file = <File>input.target.files[0];

    let mimeType = file.type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    // Store image into collection.
    this.files.push({
      data: file, 
      inProgress: false, 
      progress: 0, 
      id: grid, 
      uri: null, 
      filename: file.name,
      uploaded: false,
    });

    this.imagePreviews[grid] = [];

    // Create a link to preview the image.
    let imgURL = null;
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.imagePreviews[grid]['url'] = reader.result;
    }

    if (typeof this.files[grid] != 'undefined') {

      this.imagePreviews[grid]['data_collection'] = this.files[grid];

    }
    
  }

  // Bind(ed) on the submit button to action the upload
  // user action.
  uploadFiles() {
    this.files.forEach(file => {
      this.uploadFile(file);
      console.log('uploading ' + file.id);
    });
  }

  // Makes a subscription call to the service to
  // do the image post to the provided URL
  // see upload.service.
  uploadFile(file) {
    const formData = new FormData();

    formData.append('file', file.data);

    file.inProgress = true;
    this.files[file.id].inProgress = true; // file.progress;

    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            this.files[file.id].progress = file.progress;
            break;
          case HttpEventType.Response:
            return event;
            break;
        }

      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        this.files[file.id].inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {

      if (typeof (event) === 'object') {
        if (event.status == 200) {
          this.files[file.id].uploaded = true;
        }
        console.log(event.body);
      }
    })
  }

} // End.
