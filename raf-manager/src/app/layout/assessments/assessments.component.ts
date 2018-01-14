import { Component, OnInit } from '@angular/core';
import { AssessmentService, IAssessment } from '../../services/assessment.service';
import { BookingsService, IDocument } from '../../services/bookings.service';
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'app-assessments',
    templateUrl: './assessments.component.html',
    styleUrls: ['./assessments.component.scss'],
    providers: [AssessmentService, NgbModal, FormsModule, ReactiveFormsModule,BookingsService],
    animations: [routerTransition()]
})
export class AssessmentsComponent implements OnInit {
    assessments: IAssessment[];
    closeResult: string;
    assessment: IAssessment = this.initialiseAssessment();
    documents: IDocument[] = [];

    constructor(private assessmentService: AssessmentService, private modalService: NgbModal, private bookingsService: BookingsService) {}

    initialiseAssessment() {
        return {Id:0, Notes:'',UserId:0,BookingId:0,ShowNoShow:false,Reference:'',ClientName: '',ClaimentFirstName: '',  ClaimentLastName: '',  BookingDate: null,TrialDate:null,RequestedReportDate:null,  Time: null,  Date: null,  BookingTime: null};
    }

    getAssessments(){
        this.assessmentService.getAssessments()
            .subscribe(results => this.assessments = results,
            error => console.log("Error :: " + error))
        
    }

    saveAssessment() {        
        this.assessmentService.saveAssessment(this.assessment).subscribe(o => {
            //save documents
            if(this.documents.length > 0) {                            
                for (let document of this.documents) {
                    if(document.IsNew) {
                        document.BookingId = this.assessment.BookingId;
                        this.bookingsService.saveDocument(document).subscribe(d => {
                            document.IsNew = false;
                        },
                        error => console.log("Error :: " + error));
                    }
                }                     
            }

            this.getAssessments();
        },
        error => console.log("Error :: " + error))   
        
    }

    ngOnInit() {
        this.getAssessments();
    }

    open(content, data, isNew) {      
        //we need to clear this list everytime we open as the actual list is mained on the child component.
        this.documents = [];

        if(!isNew) {        
            this.assessment = data;
        } else{
            this.assessment = this.initialiseAssessment();
        }
        
         this.modalService.open(content).result.then((result) => {
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
