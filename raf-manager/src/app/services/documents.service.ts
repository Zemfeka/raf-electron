import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, ResponseType, ResponseContentType} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentsService {

  private URL = "http://localhost:3000/documents";
  headers: Headers;
  options: RequestOptions;
  responseType: ResponseType;
  responseContentType: ResponseContentType;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9'});
    this.responseContentType = ResponseContentType.Blob;
        
    this.options = new RequestOptions({ headers: this.headers, responseType:  this.responseContentType});    
   }

   downloadDocument(data: any) {
     console.log(data);
     return this.http.post(this.URL + "/download", data, this.options)
            // .map((response: Response) => {
            //   return <Blob>response.blob()
            // })
            .catch(this.handleError);
   }

   private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}
