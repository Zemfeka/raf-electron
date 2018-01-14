import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from '../../services/dashboard.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    bookingCount: number = 0;
    todayBookingCount: number = 0;
    bookingsWithoutAssessmentCoun: number = 0;
    assessmentsWithoutReports: number = 0;
    constructor(private DashboardService: DashboardService) {
    }

    getBookingCount(){
        this.DashboardService.getBookingCount()
            .subscribe(results => this.bookingCount = results,
            error => console.log("Error :: " + error))
        
    }

    getTodayBookingCount(){
        this.DashboardService.getTodayBookingCount()
            .subscribe(results => this.todayBookingCount = results,
            error => console.log("Error :: " + error))
        
    }

    getBookingsWithoutAssessmentCount(){
        this.DashboardService.getBookingsWithoutAssessmentCount()
            .subscribe(results => this.bookingsWithoutAssessmentCoun = results,
            error => console.log("Error :: " + error))
        
    }

    getAssessmentsWithoutReports(){
        this.DashboardService.getAssessmentsWithoutReports()
            .subscribe(results => this.assessmentsWithoutReports = results,
            error => console.log("Error :: " + error))
        
    }

    ngOnInit() {
        this.getBookingCount();
        this.getTodayBookingCount();
        this.getBookingsWithoutAssessmentCount();
        this.getAssessmentsWithoutReports();
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
