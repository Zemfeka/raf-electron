import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';

@NgModule({
    imports: [CommonModule, BookingsRoutingModule],
    declarations: [BookingsComponent]
})
export class BookingsModule {}
