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
export class LoginComponent implements OnInit {save 
    _users: IUser[];
    constructor(public router: Router, private _electronService: ElectronService, private http: Http, private loginService: LoginService) {

    }
    ngOnInit() {}

    launchWindow() {
        //this._electronService.shell.openExternal('https://coursetro.com');
        var fileText = "I am the first part of the info being emailed.\r\nI am the second part.\r\nI am the third part.";
        var fileName = "newfile001.txt"
        this.saveTextAsFile(fileText, fileName);
    }

    saveTextAsFile (data, filename){
        
                if(!data) {
                    console.error('Console.save: No data')
                    return;
                }
        
                if(!filename) filename = 'console.json'
        
                var blob = new Blob([data], {type: 'text/plain'}),
                    e    = document.createEvent('MouseEvents'),
                    a    = document.createElement('a')
        // FOR IE:
        
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(blob, filename);
          }
          else{
              var e = document.createEvent('MouseEvents'),
                  a = document.createElement('a');
        
              a.download = filename;
              a.href = window.URL.createObjectURL(blob);
              a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
              e.initEvent('click', true, false);
              a.dispatchEvent(e);
          }
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


