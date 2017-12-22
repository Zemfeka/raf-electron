import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ElectronService } from 'ngx-electron';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    headers: Headers;
    options: RequestOptions;
    constructor(public router: Router, private _electronService: ElectronService, private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
        'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });

    }
    //private _postsURL = "http://localhost:3000/users/profile?id=1";
    private _postsURL = "http://localhost:3000/users/authenticate";
    _postsArray: IPosts[];
    arr: IPosts[];

    ngOnInit() {}

    launchWindow() {
        console.log("kgang");
        this._electronService.shell.openExternal('https://coursetro.com');
    }

    onLoggedin() {
        var authenticated = this.Auth()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        
        )
        console.log(this.arr);
        localStorage.setItem('isLoggedin', 'true');
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }


    Auth(): Observable<IPosts[]> {
        var body = '{"username": "eichlefoko@gmail.com","password": "lefoko@1"}';
        console.log(body);
        return this.http
            .post(this._postsURL,body,this.options)
            .map((response: Response) => {
                this.arr = <IPosts[]>response.json();
                return <IPosts[]>response.json();
                
            })
            .catch(this.handleError);
    }
}

export interface IPosts {
    Id: number;
    FullName: string;
}
