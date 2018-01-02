import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../../services/user.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UserService],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    _users: IUser[];
    constructor(private usersService: UserService) {}

    getUsers(){
        this.usersService.getUsers()
            .subscribe(results => this._users = results,
            error => console.log("Error :: " + error))
    }

    ngOnInit() {
        this.getUsers();
    }
}
