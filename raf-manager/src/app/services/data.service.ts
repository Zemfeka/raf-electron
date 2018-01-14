import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private bookingSource = new BehaviorSubject<number>(0);
  bookingId = this.bookingSource.asObservable();

  constructor() { }

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
