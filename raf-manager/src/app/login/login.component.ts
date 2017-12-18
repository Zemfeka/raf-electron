import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ElectronService } from 'ngx-electron';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private _electronService: ElectronService) {

    }

    ngOnInit() {}

    launchWindow() {
        console.log("kgang");
        this._electronService.shell.openExternal('https://coursetro.com');
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
