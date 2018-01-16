import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataService } from '../../services/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-invoiceprint',
    templateUrl: './invoiceprint.component.html',
    styleUrls: ['./invoiceprint.component.scss'],
    providers: [DataService, NgbModal, FormsModule, ReactiveFormsModule],
    animations: [routerTransition()]
})
export class InvoicePrintComponent implements OnInit {
    constructor(private dataService: DataService,private modalService: NgbModal) {}

    ngOnInit() {
        console.log(this.dataService.getInvoiceId());
    }
}
