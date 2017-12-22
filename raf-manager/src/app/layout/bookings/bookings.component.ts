import { Component, OnInit } from '@angular/core';
import { BookingsService, IBooking } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
    providers: [BookingsService],
    animations: [routerTransition()]
})
export class BookingsComponent implements OnInit {
    _bookings: IBooking[];

    constructor(private bookingsService: BookingsService) {}

    getBookings(){
        this.bookingsService.getBookings()
            .subscribe(results => this._bookings = results,
            error => console.log("Error :: " + error))
    }

    ngOnInit() {
        this.getBookings();
    }
}
