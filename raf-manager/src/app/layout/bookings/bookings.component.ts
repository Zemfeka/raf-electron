import { Component, OnInit } from '@angular/core';
import { BookingsService, IBooking } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';

const now = new Date();

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
    booking: IBooking = this.initialiseBooking();
    constructor(private bookingsService: BookingsService, private modalService: NgbModal) {}

    getBookings(){
        this.bookingsService.getBookings()
            .subscribe(results => this._bookings = results,
            error => console.log("Error :: " + error))
    }

    initialiseBooking() {
        return {Id:0, ClientName:'', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: now, Time: null,BookingTime: {hour: 0, minute: 0},Date: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}};
    }

    saveBooking() {        
        this.booking.BookingDate = new Date(this.booking.Date.year,this.booking.Date.month - 1,this.booking.Date.day, this.booking.BookingTime.hour + 2,this.booking.BookingTime.minute);                
        this.bookingsService.saveBooking(this.booking).subscribe(o => this.getBookings(),
        error => console.log("Error :: " + error))        
    }

    ngOnInit() {
        this.getBookings();
        //this.booking.ClientName = "";
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.booking = data;
        } else{
            this.booking = this.initialiseBooking();
        }
        
        var date = new Date(this.booking.BookingDate);        
       
        this.booking.Date = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};        
        if(this.booking.Time != null)
            this.booking.BookingTime = {hour: this.booking.Time.toString().substr(0,2), minute: this.booking.Time.toString().substr(3,2)};

        console.log(this.booking.BookingTime);

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
