import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService  { 
  private _userServiceURL = "http://localhost:3000/users/profile";
  constructor(private _http: Http) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get(this._userServiceURL)
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