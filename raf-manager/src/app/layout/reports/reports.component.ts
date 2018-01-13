import { Component, OnInit } from '@angular/core';
import { ReportService, IReport } from '../../services/report.service';
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
    providers: [ReportService, NgbModal, FormsModule, ReactiveFormsModule,],
    animations: [routerTransition()]
})
export class ReportsComponent implements OnInit {
    reports: IReport[];
    closeResult: string;
    report: IReport = this.initialiseReport();
    constructor(private reportService: ReportService, private modalService: NgbModal) {}

    initialiseReport() {
        return {Id: 0, Notes: '', UserId: 0,BookingId: 0, AssessmentId: 0, AssessmentNotes: '', AssessmentUserId: 0, AssessmentBookingId: false, AssessmentShowNoShow: 0,  ClientName: '',ClaimentFirstName: '', ClaimentLastName: '', BookingDate: null, Time: null, Date: null,  BookingTime: null};
    }

    getReports(){
        this.reportService.getReports()
            .subscribe(results => this.reports = results,
            error => console.log("Error :: " + error))
        
    }

    saveReport() {        
        this.reportService.saveReport(this.report).subscribe(o => this.getReports(),
        error => console.log("Error :: " + error))   
    }

    ngOnInit() {
        this.getReports();
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.report = data;
        } 
        
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


