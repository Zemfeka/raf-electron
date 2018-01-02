import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ElectronService } from 'ngx-electron';

import { LoginService, IUser } from '../services/login.service';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    _users: IUser[];
    constructor(public router: Router, private _electronService: ElectronService, private http: Http, private loginService: LoginService) {

    }
    ngOnInit() {}

    launchWindow() {
        console.log("kgang");
        this._electronService.shell.openExternal('https://coursetro.com');
    }

    onLoggedin() {
        this.loginService.GetUsers()
        .subscribe(results => this._users = results,
        error => console.log("Error :: " + error))

        //console.log("length " + this._users.length);
        //if(this._users.length > 0){
            localStorage.setItem('isLoggedin', 'true');
        //}
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}


