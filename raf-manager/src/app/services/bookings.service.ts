import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class BookingsService { 
  private _bookingURL = "http://localhost:3000/bookings";
  private attorneyURL = "http://localhost:3000/attorneys";

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });    
   }

  getBookings(): Observable<IBooking[]> {
    return this._http.get(this._bookingURL)
            .map((response: Response) => {
              return <IBooking[]>response.json();
            })
            .catch(this.handleError);
  }

  getAttorney(bookingId: number): Observable<IAttorney> {
    return this._http.get(this.attorneyURL + "/" + bookingId)
            .map((response: Response) => {
              return <IAttorney>response.json()[0];
            })
            .catch(this.handleError);
  }

  saveBooking(booking: IBooking){
    if(booking.Id == 0){
        return this._http.post(this._bookingURL, booking,this.options)
        .catch(this.handleError);
    }else{
      return this._http.put(this._bookingURL, booking,this.options)
        .catch(this.handleError);
    }
    
  }

  saveAttorney(attorney: IAttorney){
    if(attorney.Id == 0){
      return this._http.post(this.attorneyURL, attorney,this.options)
      .catch(this.handleError);
  }else{
    return this._http.put(this.attorneyURL, attorney,this.options)
      .catch(this.handleError);
  }
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}


export interface IBooking {
  Id: number;
  ClientName: string;
  ClaimentFirstName: string;
  ClaimentLastName: string;
  BookingDate: Date;
  TrialDate: Date;
  RequestedReportDate: Date;
  Reference: string;
  Time: any;
  Date: any;
  BookingTime: any,
  TDate: any,
  RDate: any
}

export interface IAttorney {
  Id: number;
  BookingId: number;
  ClientName: string;
  ContactPerson: string;
  PhoneNumber: string;
  Email: string;
}

export interface IDocument {
  Id: number;
  DocumentName: string;
  DocumentType: string;
  DocumentExtension: string;
  Contents: any;
}
