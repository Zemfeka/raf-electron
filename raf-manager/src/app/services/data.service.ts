import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private bookingSource = new BehaviorSubject<number>(0);
  bookingId: number = 0;

  invoiceId: number = 0;
  

  constructor() { }

  setInvoiceId(invoiceId : number) {
    this.invoiceId = invoiceId;
  }
  getInvoiceId() {
    return this.invoiceId;
  }

  setBookingId(invoiceId : number) {
    this.bookingId = invoiceId;
  }
  getBookingId() {
    return this.bookingId;
  }
  
  changeBooking(data: number){     
    this.bookingSource.next(data);
  }

  getNativeWindow() {
    return window;
  }

  getGlobalUrl(): typeof URL {
    return window.URL || (<any>window).webkitURL;
  }
}
