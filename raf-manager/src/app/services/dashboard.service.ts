import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { IBooking } from '../services/bookings.service';

@Injectable()
export class DashboardService {
  private assessmentServicegetBookingCountURL = "http://localhost:3000/dashboards/getBookingCount";
  private getTodayBookingCounturl = "http://localhost:3000/dashboards/getTodayBookingCount";
  private getBookingsWithoutAssessmentCounturl = "http://localhost:3000/dashboards/getBookingsWithoutAssessmentCount";
  private getAssessmentsWithoutReportsurl = "http://localhost:3000/dashboards/getAssessmentsWithoutReports";
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getBookingCount():Observable<number>{
    return this.http.get(this.assessmentServicegetBookingCountURL)
    .map((response: Response) => {
      var mapped = <number>response.json();
      console.log(mapped);
      console.log(response.json());
      return mapped;
    })
    .catch(this.handleError);
  }

  getTodayBookingCount():Observable<number>{
    return this.http.get(this.getTodayBookingCounturl)
    .map((response: Response) => {
      var mapped = <number>response.json();
      console.log(mapped);
      console.log(response.json());
      return mapped;
    })
    .catch(this.handleError);
  }

  getBookingsWithoutAssessmentCount():Observable<number>{
    return this.http.get(this.getBookingsWithoutAssessmentCounturl)
    .map((response: Response) => {
      var mapped = <number>response.json();
      console.log(mapped);
      console.log(response.json());
      return mapped;
    })
    .catch(this.handleError);
  }

  getAssessmentsWithoutReports():Observable<number>{
    return this.http.get(this.getAssessmentsWithoutReportsurl)
    .map((response: Response) => {
      var mapped = <number>response.json();
      console.log(mapped);
      console.log(response.json());
      return mapped;
    })
    .catch(this.handleError);
  }
  
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}


