import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class AssessmentService {
  private assessmentServiceGetURL = "http://localhost:3000/assessments/get";
  private assesmentServiceAddURL = "http://localhost:3000/assessments/add";
  private assesmentServiceUpdateURL = "http://localhost:3000/assessments/update";
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAssessments():Observable<IAssessment[]>{
    return this.http.get(this.assessmentServiceGetURL)
    .map((response: Response) => {
      var mapped = <IAssessment[]>response.json();
      console.log(mapped);
      return mapped;
    })
    .catch(this.handleError);

    
            
  }

  saveAssessment(assessment: IAssessment){
    if(assessment.Id == 0){
        return this.http.post(this.assesmentServiceAddURL, assessment,this.options)
        .catch(this.handleError);
    }else{
      return this.http.put(this.assesmentServiceUpdateURL, assessment ,this.options)
        .catch(this.handleError);
    }
    
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}

export interface IAssessment{
  Id: any;
  Notes: any;
  UserId: any;
  BookingId: any;
  ShowNoShow: boolean;

  //booking info
  ClientName: string;
  ClaimentFirstName: string;
  ClaimentLastName: string;
  BookingDate: Date;
  Time: Time;
  Date: any;
  BookingTime: any
}
