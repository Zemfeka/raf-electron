import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class ReportService {
  private reportServiceGetURL = "http://localhost:3000/reports/get";
  private reportServiceAddURL = "http://localhost:3000/reports/add";
  private reportServiceUpdateURL = "http://localhost:3000/reports/update";
  headers: Headers;
  options: RequestOptions;
  
  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getReports():Observable<IReport[]>{
    return this.http.get(this.reportServiceGetURL)
    .map((response: Response) => {
      var mapped = <IReport[]>response.json();
      return mapped;
    })
    .catch(this.handleError);
  }

  saveReport(report: IReport){
    if(report.Id == 0 || report.Id == null){
        return this.http.post(this.reportServiceAddURL, report,this.options)
        .catch(this.handleError);
    }else{
      return this.http.put(this.reportServiceUpdateURL, report ,this.options)
        .catch(this.handleError);
    }
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}

export interface IReport{
  Id: any;
  Notes: any;
  UserId: any;
  BookingId: any;

  //assessment info
  AssessmentId: any;
  AssessmentNotes: any;
  AssessmentUserId: any;
  AssessmentBookingId: any;
  AssessmentShowNoShow: any;

  //booking info
  ClientName: string;
  ClaimentFirstName: string;
  ClaimentLastName: string;
  BookingDate: Date;
  Time: Time;
  Date: any;
  BookingTime: any
}
