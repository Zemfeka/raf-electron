import { Component, OnInit } from '@angular/core';
import { BookingsService, IBooking, IAttorney, IDocument } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { error } from 'util';
import { window } from 'rxjs/operators/window';
import { forEach } from '@angular/router/src/utils/collection';

const now = new Date();

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
    providers: [BookingsService, NgbModal, FormsModule, ReactiveFormsModule],
    animations: [routerTransition()]
})

export class BookingsComponent implements OnInit {
    _bookings: IBooking[];
    documents: IDocument[] = [];
    closeResult: string;
    booking: IBooking;
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
    // initialiseDocument() {
    //     return {Id:0,BookingId:0, DocumentType: '',DocumentName: '',DocumentExtension: '', Contents: {}, IsNew: true}
    // }
    getRandomArbitrary(min, max) {
        return this.booking.ClientName + Math.random() * (max - min) + min;
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
       
        this.bookingsService.saveBooking(this.booking).subscribe(results => {                
            //TODO: change the save to return bookingId and then use it.                                       
                //save the attorney details                
                var bookingId = this.booking.Id > 0 ? this.booking.Id : results;
                var counter = 0;
                if(this.attorney.ContactPerson != null || this.attorney.ContactPerson != ''){
                    this.attorney.BookingId = bookingId;
                    this.attorney.ClientName = this.booking.ClientName;
                    this.bookingsService.saveAttorney(this.attorney).subscribe(a => {
                        //save documents
                        if(this.documents.length > 0) {                            
                            for (let document of this.documents) {
                                if(document.IsNew) {
                                    document.BookingId = bookingId;
                                    //document.Contents = null;
                                    this.bookingsService.saveDocument(document).subscribe(d => {
                                        document.IsNew = false;
                                    },
                                    error => console.log("Error :: " + error));
                                }
                            }                     
                        }
                    },error => console.log("Error :: " + error));
                }      

                this.getBookings().subscribe(bookings => {
                    this._bookings = bookings;                                            
                },
                error => console.log("Error :: " + error));
        },
        error => console.log("Error :: " + error));                                                               
    }

    deleteBooking(bookingId){
        this.bookingsService.deleteBooking(bookingId)
        .subscribe(o => {
            this.bookingsService.deleteAttorney(bookingId).subscribe(a =>{
                this.bookingsService.deleteDocumentByBooking(bookingId).subscribe(d => {
                    this.getBookings().subscribe(results => this._bookings = results,
                        error => console.log("Error :: " + error));
                })
            })
            
        });
    }

    

    // deleteDocument(Id) {
    //     this.bookingsService.deleteDocument(Id)
    //     .subscribe(o => {
    //         this.getDocuments(this.booking.Id);
    //     },error => console.log("Error :: " + error))
    // }

    ngOnInit() {       
       this.getBookings().subscribe(results => this._bookings = results,
        error => console.log("Error :: " + error));      
    }

    open(content, data, isNew) { 
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];

        if(!isNew) {        
            this.booking = data;            
            //get the attorney details
            this.bookingsService.getAttorney(data.Id).subscribe(result => {
                if(result != null)
                    this.attorney = result
                else
                    this.attorney = this.initialiseAttorney();

            },error => console.log("Error :: " + error));            
        } else{
            this.booking = this.initialiseBooking();
            this.booking.Reference = this.getRandomArbitrary(100, 200);

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

    uploadDocument(document) {        
        this.documents.push(document);        
    }

    // getDocuments(bookingId) {
    //     this.bookingsService.getDocuments(bookingId)
    //         .subscribe(results => this.documents = results,
    //             error => console.log("Error :: " + error));
    // }

    // onFileChange(event) {
    //     let reader = new FileReader();
    //     if(event.target.files && event.target.files.length > 0) {
    //       let file = event.target.files[0];          
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         this.document.DocumentName = file.name;
    //         this.document.DocumentExtension = file.type;
    //         this.document.Contents = reader.result.split(',')[1];
    //       };          
    //     }
    //   }

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
