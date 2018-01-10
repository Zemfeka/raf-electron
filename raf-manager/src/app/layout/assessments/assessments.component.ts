import { Component, OnInit } from '@angular/core';
import { AssessmentService, IAssessment } from '../../services/assessment.service';
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
    providers: [AssessmentService, NgbModal, FormsModule, ReactiveFormsModule,],
    animations: [routerTransition()]
})
export class AssessmentsComponent implements OnInit {
    assessments: IAssessment[];
    closeResult: string;
    assessment: IAssessment = this.initialiseAssessment();
    constructor(private assessmentService: AssessmentService, private modalService: NgbModal) {}

    initialiseAssessment() {
        return {Id:0, Notes:'',UserId:0,BookingId:0,ShowNoShow:false,ClientName: '',ClaimentFirstName: '',  ClaimentLastName: '',  BookingDate: null,  Time: null,  Date: null,  BookingTime: null};
    }

    getAssessments(){
        this.assessmentService.getAssessments()
            .subscribe(results => this.assessments = results,
            error => console.log("Error :: " + error))
        
    }

    saveAssessment() {        
        this.assessmentService.saveAssessment(this.assessment).subscribe(o => this.getAssessments(),
        error => console.log("Error :: " + error))   
        
        alert("Saved successfully");
    }

    ngOnInit() {
        this.getAssessments();
    }

    open(content, data, isNew) {        
        if(!isNew) {        
            this.assessment = data;
        } else{
            this.assessment = this.initialiseAssessment();
        }
        
        console.log(data);

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
