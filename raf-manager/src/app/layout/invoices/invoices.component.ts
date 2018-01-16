import { Component, OnInit } from '@angular/core';
import { InvoiceService, IInvoice, IInvoiceItem } from '../../services/invoice.service';
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Alert } from 'selenium-webdriver';
import { forEach } from '@angular/router/src/utils/collection';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss'],
    providers: [InvoiceService, NgbModal, FormsModule, ReactiveFormsModule,DataService],
    animations: [routerTransition()]
})
export class InvoicesComponent implements OnInit {
    invoices: IInvoice[];
    invoiceItems: IInvoiceItem[];
    invoiceItem: IInvoiceItem = this.initialiseinvoiceitem();
    closeResult: string;
    invoice: IInvoice = this.initialiseinvoice();
    showDetail: boolean = false;
    showInvoice: boolean = true;
    tot: number = 0;
    constructor(private invoiceService: InvoiceService, private modalService: NgbModal,
         private dataService: DataService, private router: Router) {}

    initialiseinvoice() {
        return { Id: 0, Number: '', InvoiceDate: null, Total: 0, UserId: 0, BookingId: 0, InvoiceBusinessId: 0, BusinessId: 0, BusinessName: '', BusinessRegistrationNumber: '', BusinessVatNumber: '', AttorneyId: 0, AttorneyBookingId: 0, AttorneyClientName: '', AttorneyContactPerson: '', AttorneyPhoneNumber: '', AttorneyEmail: '', ReportId: 0, ReportNotes: '', ReportUserId: 0, ReportBookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: 0, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null};
    }

    initialiseinvoiceitem() {
        return {"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": 0}
    }

    getInvoices(){
        this.invoiceService.getInvoices()
            .subscribe(results => this.invoices = results,
            error => console.log("Error :: " + error))
        
    }

    getSum(){
        var b = 0;

        if(this.invoiceItems != undefined){
            for(let i=0; i < this.invoiceItems.length;i++){
                b += this.invoiceItems[i].SubTotal;
            }
        }
        return b;
    }

    getSub(invoiceItem:any){
        return this.invoiceItem.SubTotal = invoiceItem.Price * invoiceItem.Quantity;
    }
    

    toggle() {
        this.showDetail == true; // ? false : true;
        this.showInvoice == false; // ? false : true;
    }

    saveReport() {        
        this.invoiceService.saveInvoices(this.invoice).subscribe(o => this.getInvoices(),
        error => console.log("Error :: " + error))   
    }

    ngOnInit() {
        this.getInvoices();
    }

    addItem(){
        this.invoiceItems.push({"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
    }

    deleteInvoiceItem(invoiceItem: any){
        console.log("went in" + invoiceItem);
        this.invoiceItems.splice(invoiceItem.index, 1);
        // this.bookingsService.deleteBooking(bookingId)
        // .subscribe(o => {
        //     this.bookingsService.deleteAttorney(bookingId).subscribe(a =>{
        //         this.bookingsService.deleteDocumentByBooking(bookingId).subscribe(d => {
        //             this.getBookings().subscribe(results => this._bookings = results,
        //                 error => console.log("Error :: " + error));
        //         })
        //     })
            
        // });
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.invoice = data;
        } 
        
        this.invoiceService.getInvoiceItems(this.invoice.Id)
            .subscribe(results => this.invoiceItems = results,
            error => console.log("Error :: " + error));
        
        
        // console.log(this.invoice.Id);

        // if(this.invoice.Id == 0 || this.invoice.Id == null){
            
        //     this.invoiceItems = [{"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id},
        //     {"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id},
        //     {"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id},]

        //     console.log(this.invoiceItems);
        // }
        


        this.modalService.open(content,{size: 'lg'}).result.then((result) => {
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

    printInvoice(invoiceId) {
        this.dataService.setInvoiceId(invoiceId);
        console.log(invoiceId);
        console.log(this.router.url);

        this.router.navigate(["/blank-page"]);
    }
}


