import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../../services/user.service';
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UserService, NgbModal, FormsModule, ReactiveFormsModule,],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    _users: IUser[];
    closeResult: string;
    user: IUser = this.initialiseUser();
    constructor(private usersService: UserService, private modalService: NgbModal) {}

    initialiseUser() {
        return {Id:0, FullName:'',Email:'',Password:''};
    }

    getUsers(){
        this.usersService.getUsers()
            .subscribe(results => this._users = results,
            error => console.log("Error :: " + error))
        
    }

    saveUser() {        
        this.usersService.saveUser(this.user).subscribe(o => this.getUsers(),
        error => console.log("Error :: " + error))        
    }

    ngOnInit() {
        this.getUsers();
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.user = data;
        } else{
            this.user = this.initialiseUser();
        }
        
 

        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
