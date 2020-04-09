import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  API: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  upload(formData) {
    return this.http.post(this.API + "/image/store", formData, {
        reportProgress: true,
		observe: 'events'
    });
  }

  get() {
  	return this.http.get(this.API + "/image/list", {});

  	// return this.http.get(this.API + "/image/list")
  	// 	.pipe(
  	// 		catchError(
  	// 			console.log("..");
			// )
  	// 	);
  }

}
