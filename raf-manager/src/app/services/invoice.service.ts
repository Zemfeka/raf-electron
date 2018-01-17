import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';
const now = new Date();

@Injectable()
export class InvoiceService {
  private invoiceServiceGetURL = "http://localhost:3000/invoices/get";
  private invoiceServiceAddURL = "http://localhost:3000/invoices/add";
  private invoiceServiceUpdateURL = "http://localhost:3000/invoices/update";
  private invoiceItemsServiceGetURL = "http://localhost:3000/invoices/getinvoiceitems/";
  private invoiceitemsServiceAddURL = "http://localhost:3000/invoices/addInvoiceitems";
  private invoiceitemsServiceUpdateURL = "http://localhost:3000/invoices/updateInvoiceitems";
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getInvoices():Observable<IInvoice[]>{
    return this.http.get(this.invoiceServiceGetURL)
    .map((response: Response) => {
      var mapped = <IInvoice[]>response.json();
      return mapped;
    })
    .catch(this.handleError);
  }

  getInvoice(id: number):Observable<IInvoice>{
    return this.http.get(this.invoiceServiceGetURL + "/" + id)
    .map((response: Response) => {
      var mapped = <IInvoice>response.json();
      return mapped[0];
    })
    .catch(this.handleError);
  }

  getInvoiceItems(invoiceid: number):Observable<IInvoiceItem[]>{
    return this.http.get(this.invoiceItemsServiceGetURL + invoiceid)
    .map((response: Response) => {
      var mapped = <IInvoiceItem[]>response.json();
      return mapped;
    })
    .catch(this.handleError);
  }

  saveInvoices(invoice: IInvoice, total:number){

    if(invoice.Id == 0 || invoice.Id == null){
      invoice.Number = invoice.BookingRef.toString();
      invoice.InvoiceDate = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
      invoice.Total = total;
      console.log(invoice);
        return this.http.post(this.invoiceServiceAddURL, invoice,this.options)
        .map((response: Response) => {
          return <number>response.json()
        }) 
        .catch(this.handleError);
    }else{
      invoice.Number = invoice.BookingRef.toString();
      
      return this.http.put(this.invoiceServiceUpdateURL, invoice ,this.options)
        .catch(this.handleError);
    }
  }

  saveInvoiceItem(invoiceitem: IInvoiceItem){
    return this.http.post(this.invoiceitemsServiceAddURL, invoiceitem, this.options)
            .catch(this.handleError);
  }

  updateInvoiceItem(invoiceitem: IInvoiceItem){
    return this.http.post(this.invoiceitemsServiceUpdateURL, invoiceitem, this.options)
            .catch(this.handleError);
  }

  private handleError(error: Response){
    console.log(error.statusText);
    return Observable.throw(error.statusText);
  }
}

export interface IInvoice{
  //invoice
  Id: number;
  Number: string;
  InvoiceDate: any;
  Total: number;
  UserId: number;
  BookingId: number;
  InvoiceBusinessId: number

  //business info
  BusinessId: number;
  BusinessName: string;
  BusinessRegistrationNumber: string;
  BusinessVatNumber: string;

  //Attorney
  AttorneyId: number;
  AttorneyBookingId: number;
  AttorneyClientName: string;
  AttorneyContactPerson: string;
  AttorneyPhoneNumber: string;
  AttorneyEmail: string;

  //report info
  ReportId: any;
  ReportNotes: any;
  ReportUserId: any;
  ReportBookingId: any;

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
  BookingTime: any;
  BookingRef: any;
  Items: IInvoiceItem[]
}

export interface IInvoiceItem{
  //Invoice Items
  Id: number;
  Quantity: number;
  Name: string;
  Description: string;
  Price: number;
  SubTotal: number;
  InvoiceId: number;
}