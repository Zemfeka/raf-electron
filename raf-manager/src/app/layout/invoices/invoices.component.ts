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

const now = new Date();

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
    constructor(private invoiceService: InvoiceService, private modalService: NgbModal,
         private dataService: DataService, private router: Router) {}

    initialiseinvoice() {
        return { Id: 0, Number: '', InvoiceDate: now, Total: 0, UserId: 0, BookingId: 0, InvoiceBusinessId: 0, BusinessId: 0, BusinessName: '', BusinessRegistrationNumber: '', BusinessVatNumber: '', AttorneyId: 0, AttorneyBookingId: 0, AttorneyClientName: '', AttorneyContactPerson: '', AttorneyPhoneNumber: '', AttorneyEmail: '', ReportId: 0, ReportNotes: '', ReportUserId: 0, ReportBookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: 0, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null, BookingRef:'', Items:[], LinkNumber: '', RafReference: '',Qualification:'',QualificationHolder:'',VendorNumber:'',HpcsaRegistrationNumber:'',ClaimentIdNumber:'',ClaimentContactNumber:''};
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
        console.log(this.invoiceItems);
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
        this.showDetail == true;
        this.showInvoice == false;
    }

    saveInvoice() {  
        this.invoice.Items = this.invoiceItems;
        
        var total = 0;
        for (let item of this.invoice.Items) {
            item.SubTotal = item.Quantity*item.Price;
            total = total + item.SubTotal;
            this.invoice.Total = total;
        }

        // this.invoiceService.saveInvoices(this.invoice,total).subscribe(results => {                
        //     //TODO: change the save to return bookingId and then use it.                                       
        //         //save the attorney details                
        //         var invoiceid = this.invoice.Id > 0 ? this.invoice.Id : results;
        //         var counter = 0;
        //         this.invoice.Id = invoiceid;

        //                 //save invoice items
        //         if(this.invoice.Items.length > 0) {                            
        //             for (let item of this.invoice.Items) {
        //                 if(item.Id == 0) {
        //                     item.InvoiceId = invoiceid;
        //                     this.invoiceService.saveInvoiceItem(item).subscribe(d => {
        //                     },
        //                     error => console.log("Error :: " + error));
        //                 }     
        //                 else{
        //                     item.InvoiceId = invoiceid;
        //                     this.invoiceService.updateInvoiceItem(item).subscribe(d => {
        //                     },
        //                     error => console.log("Error :: " + error));
        //                 }                
        //             }
        //         }
                   
                
        //         this.invoiceService.getInvoices().subscribe(b => {
        //             this.invoices = b;                                            
        //         },
        //         error => console.log("Error :: " + error));
        // },
        // error => console.log("Error :: " + error)); 
              
  
        
    }

    ngOnInit() {
        this.getInvoices();
    }

    addItem(){
        // this.invoiceItems.push({"Id": 0, "Quantity": 0, "Name": '', "Description": '', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
        this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Consultation ', "Description": 'Consultation', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Assessment', "Description": 'Assessment', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Document, reading and organising data', "Description": 'Document, reading and organising data', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Report compilation', "Description": 'Report compilation', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Finalisation and submission', "Description": 'Finalisation and submission', "Price": 10224.11, "SubTotal": 10224.11, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'VAT 14%', "Description": 'VAT 14%', "Price": 1431.38, "SubTotal": 1431.38, "InvoiceId": this.invoice.Id});
        
    }
    initialiseInvoiceItems(serviceTypeId) {
        if(serviceTypeId == 1){
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Consultation ', "Description": 'Consultation', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Assessment', "Description": 'Assessment', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Document, reading and organising data', "Description": 'Document, reading and organising data', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Report compilation', "Description": 'Report compilation', "Price": 0, "SubTotal": 0, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'Finalisation and submission', "Description": 'Finalisation and submission', "Price": 10224.11, "SubTotal": 10224.11, "InvoiceId": this.invoice.Id});
            this.invoiceItems.push({"Id": 0, "Quantity": 1, "Name": 'VAT 14%', "Description": 'VAT 14%', "Price": 1431.38, "SubTotal": 1431.38, "InvoiceId": this.invoice.Id});
        }
        //todo: other service types to be added. (i.e Joint minutes, Court appearance and addendum)
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
        }else{
            this.initialiseInvoiceItems(1);
        } 
        //this.initialiseInvoiceItems(1);
        
        this.invoiceService.getInvoiceItems(this.invoice.Id)
            .subscribe(results => this.invoiceItems = results,
            error => console.log("Error :: " + error));
        
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
        localStorage.setItem('invoiceId', invoiceId);
        console.log(invoiceId);
        

        this.router.navigate(["/invoiceprint"]);
    }
}


