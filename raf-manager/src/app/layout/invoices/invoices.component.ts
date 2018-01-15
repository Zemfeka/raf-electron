import { Component, OnInit } from '@angular/core';
import { InvoiceService, IInvoice, IInvoiceItem } from '../../services/invoice.service';
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss'],
    providers: [InvoiceService, NgbModal, FormsModule, ReactiveFormsModule,],
    animations: [routerTransition()]
})
export class InvoicesComponent implements OnInit {
    invoices: IInvoice[];
    invoiceItems: IInvoiceItem[];
    closeResult: string;
    invoice: IInvoice = this.initialiseinvoice();
    showDetail: boolean = false;
    showInvoice: boolean = true;
    constructor(private invoiceService: InvoiceService, private modalService: NgbModal) {}

    initialiseinvoice() {
        return { Id: 0, Number: '', InvoiceDate: null, Total: 0, UserId: 0, BookingId: 0, InvoiceBusinessId: 0, BusinessId: 0, BusinessName: '', BusinessRegistrationNumber: '', BusinessVatNumber: '', AttorneyId: 0, AttorneyBookingId: 0, AttorneyClientName: '', AttorneyContactPerson: '', AttorneyPhoneNumber: '', AttorneyEmail: '', ReportId: 0, ReportNotes: '', ReportUserId: 0, ReportBookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: 0, AssessmentShowNoShow: 0, ClientName: '', ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null, BookingTime: null};
    }

    getInvoices(){
        this.invoiceService.getInvoices()
            .subscribe(results => this.invoices = results,
            error => console.log("Error :: " + error))
        
    }

    toggle() {
        console.log('in');
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

    open(content, data, isNew) {        
        if(!isNew) {        
            this.invoice = data;
        } 
        
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
}


