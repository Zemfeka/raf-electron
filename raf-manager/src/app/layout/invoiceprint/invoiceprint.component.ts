import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataService } from '../../services/data.service';
import { InvoiceService, IInvoice, IInvoiceItem } from '../../services/invoice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-invoiceprint',
    templateUrl: './invoiceprint.component.html',
    styleUrls: ['./invoiceprint.component.scss'],
    providers: [DataService, NgbModal, FormsModule, ReactiveFormsModule, InvoiceService],
    animations: [routerTransition()]
})
export class InvoicePrintComponent implements OnInit {
    invoice: IInvoice;
    invoiceItems: IInvoiceItem[];
    constructor(private dataService: DataService,private modalService: NgbModal,private invoiceService: InvoiceService) {}

    ngOnInit() {
        if(localStorage.getItem('invoiceId') != undefined){
            var invid=0;
            invid = Number(localStorage.getItem('invoiceId'));
            this.getInvoice(invid);
            this.getInvoiceItems(invid);
        }
    }

    getInvoice(invoiceid: number){
        this.invoiceService.getInvoice(invoiceid)
            .subscribe(results => this.invoice = results,
            error => console.log("Error :: " + error))
        
    }

    getInvoiceItems(invoiceid: number){
        this.invoiceService.getInvoiceItems(invoiceid)
            .subscribe(results => {this.invoiceItems = results},
            error => console.log("Error :: " + error));
    }
}
