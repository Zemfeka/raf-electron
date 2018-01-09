import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [UsersComponent]
})
export class UsersModule {}
