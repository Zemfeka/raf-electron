import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { PageHeaderModule } from './../../shared';
import { DocumentsModule } from '../components/documents/documents.module';

@NgModule({
    imports: [CommonModule, BookingsRoutingModule, PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,DocumentsModule],
    declarations: [BookingsComponent]
})
export class BookingsModule {}
