import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BookingsRoutingModule, PageHeaderModule],
    declarations: [BookingsComponent]
})
export class BookingsModule {}
