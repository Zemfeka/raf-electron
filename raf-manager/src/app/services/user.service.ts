import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class UserService  { 
  private _userServiceURL = "http://localhost:3000/users/profile";
  private userServiceURL = "http://localhost:3000/users/add";
  private userServiceUpdateURL = "http://localhost:3000/users/update";
  headers: Headers;
  options: RequestOptions;
  
  constructor(private _http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });  
  }

  getUsers(): Observable<IUser[]> {
   
            return this._http.get(this._userServiceURL)
            .map((response: Response) => {
              var mapped = <IUser[]>response.json();
              console.log(mapped);
              return mapped;
              
            })
            .catch(this.handleError);
  }

  saveUser(user: IUser){
    if(user.Id == 0){
        return this._http.post(this.userServiceURL, user,this.options)
        .catch(this.handleError);
    }else{
      return this._http.put(this.userServiceUpdateURL, user,this.options)
        .catch(this.handleError);
    }
    
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