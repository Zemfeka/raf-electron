import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BookingsRoutingModule, PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [BookingsComponent]
})
export class BookingsModule {}
