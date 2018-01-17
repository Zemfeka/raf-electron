import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private _logingURL = "http://localhost:3000/users/authenticate";
  headers: Headers;
  options: RequestOptions;
  constructor(private _http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });

  }

  GetUsers(username,password): Observable<IUser[]> {
    var body = '{"username":"' + username + '","password":"' + password + '"}';
    console.log(body);
    return this._http
        .post(this._logingURL,body,this.options)
        .map((response: Response) => {
            return <IUser[]>response.json();
            
        })
        .catch(this.handleError);

  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}


export interface IUser {
  Id: number;
  FullName: string;
  Email: string;
  Password: string;
}
