import { Component, OnInit } from '@angular/core';
import { BookingsService, IBooking } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
    providers: [BookingsService, NgbModal, FormsModule, ReactiveFormsModule,],
    animations: [routerTransition()]
})
export class BookingsComponent implements OnInit {
    _bookings: IBooking[];
    closeResult: string;
    booking: IBooking = {Id:0, ClientName:'', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null};
    constructor(private bookingsService: BookingsService, private modalService: NgbModal) {}

    getBookings(){
        this.bookingsService.getBookings()
            .subscribe(results => this._bookings = results,
            error => console.log("Error :: " + error))
    }

    ngOnInit() {
        this.getBookings();
        //this.booking.ClientName = "";
    }

    open(content, data) {
        console.log(data);
        this.booking = data;
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
