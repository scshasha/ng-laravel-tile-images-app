import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  URL: string = environment.API_URL + "image/store/";

  constructor(private http: HttpClient) { }

  upload(formData) {
    return this.http.post(this.URL, formData, {
        reportProgress: true,
		observe: 'events'
    });
  }
}
