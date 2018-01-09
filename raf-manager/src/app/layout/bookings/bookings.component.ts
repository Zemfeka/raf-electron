import { Component, OnInit } from '@angular/core';
import { BookingsService, IBooking, IAttorney } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { error } from 'util';


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
    attorney: IAttorney = this.initialiseAttorney();
    constructor(private bookingsService: BookingsService, private modalService: NgbModal) {}

    getBookings(){
        return this.bookingsService.getBookings();           
    }

    initialiseBooking() {
        return {Id:0, ClientName:'', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: now,TrialDate:null,RequestedReportDate:null,Reference:'', Time: null,BookingTime: {hour: 0, minute: 0},Date: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},TDate:{year: null, month: null, day: null},RDate:{year: null, month: null, day: null}};
    }
    initialiseAttorney() {
        return {Id: 0,BookingId:0, ClientName:'',ContactPerson:'',PhoneNumber:'',Email:''};
    }

    saveBooking() {        
       
        if(this.booking.Date != null){
            this.booking.BookingDate = new Date(this.booking.Date.year,this.booking.Date.month - 1,this.booking.Date.day, this.booking.BookingTime.hour,this.booking.BookingTime.minute,0,0);
        }        
        if(this.booking.TDate != null){
            this.booking.TrialDate = new Date(this.booking.TDate.year,this.booking.TDate.month - 1,this.booking.TDate.day + 1,0,0,0,0);             
        }
        if(this.booking.RDate != null){
            this.booking.RequestedReportDate = new Date(this.booking.RDate.year,this.booking.RDate.month - 1,this.booking.RDate.day + 1,0,0,0,0);   
        }        
       
       this.booking.Time =  this.booking.BookingTime.hour + ":0" + this.booking.BookingTime.minute + ":0" + this.booking.BookingTime.second; 
       
        this.bookingsService.saveBooking(this.booking).subscribe(o => {          
            this.getBookings().subscribe(results => {
                this._bookings = results;
                var bookingId = results[results.length -1].Id;
                //save the attorney details                
                this.attorney.BookingId = bookingId;
                this.attorney.ClientName = this.booking.ClientName;
                this.bookingsService.saveAttorney(this.attorney).subscribe(a => console.log(''),error => console.log("Error :: " + error));
            });                  
        },
        error => console.log("Error :: " + error));
        
        
    }

    ngOnInit() {
       this.getBookings().subscribe(results => this._bookings = results,
        error => console.log("Error :: " + error));
        //this.booking.ClientName = "";
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.booking = data;
            //get the attorney details
            this.bookingsService.getAttorney(data.Id).subscribe(result => this.attorney = result,
                error => console.log("Error :: " + error));
        } else{
            this.booking = this.initialiseBooking();
            this.attorney = this.initialiseAttorney();
        }
        
        var date = new Date(this.booking.BookingDate);        
        
        this.booking.Date = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
        
        if(this.booking.TrialDate != null){
            var tdate = new Date(this.booking.TrialDate);
            this.booking.TDate = {year: tdate.getFullYear(), month: tdate.getMonth() + 1, day: tdate.getDate()}
        }
        
        if(this.booking.RequestedReportDate != null){
            var tdate = new Date(this.booking.RequestedReportDate);
            this.booking.RDate = {year: tdate.getFullYear(), month: tdate.getMonth() + 1, day: tdate.getDate()}
        }
                
        if(this.booking.Time != null)
            this.booking.BookingTime = {hour: this.booking.Time.toString().substr(0,2), minute: this.booking.Time.toString().substr(3,2)};

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
