import { Component, OnInit } from '@angular/core';
import { ReportService, IReport } from '../../services/report.service';
import { BookingsService, IDocument } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
    providers: [ReportService, NgbModal, FormsModule, ReactiveFormsModule,BookingsService],
    animations: [routerTransition()]
})
export class ReportsComponent implements OnInit {
    reports: IReport[];
    closeResult: string;
    report: IReport = this.initialiseReport();
    documents: IDocument[] = [];

    constructor(private reportService: ReportService, private modalService: NgbModal,private bookingsService: BookingsService) {}

    initialiseReport() {
        return {Id: 0, Notes: '', UserId: 0,BookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: false, AssessmentShowNoShow: 0,  ClientName: '',ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null,  BookingTime: null};
    }

    getReports(){
        this.reportService.getReports()
            .subscribe(results => this.reports = results,
            error => console.log("Error :: " + error))
        
    }

    saveReport() {        
        this.reportService.saveReport(this.report).subscribe(o => {
             //save documents
             if(this.documents.length > 0) {                            
                for (let document of this.documents) {
                    if(document.IsNew) {
                        document.BookingId = this.report.BookingId;
                        this.bookingsService.saveDocument(document).subscribe(d => {
                            document.IsNew = false;
                        },
                        error => console.log("Error :: " + error));
                    }
                }                     
            }
            this.getReports();
        },
        error => console.log("Error :: " + error))   
    }

    ngOnInit() {
        this.getReports();
    }

    open(content, data, isNew) {        
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];

        if(!isNew) {        
            this.report = data;
        } 
        
        this.modalService.open(content,{size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    uploadDocument(document) {        
        this.documents.push(document);        
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


