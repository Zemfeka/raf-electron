import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class BookingsService { 
  private _bookingURL = "http://localhost:3000/bookings";
  constructor(private _http: Http) { }

  getBookings(): Observable<IBooking[]> {
    return this._http.get(this._bookingURL)
            .map((response: Response) => {
              return <IBooking[]>response.json();
            })
            .catch(this.handleError);
  }

  saveBooking(booking: IBooking){
    return this._http.post(this._bookingURL, booking).catch(this.handleError);
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
  Time: Time
}
