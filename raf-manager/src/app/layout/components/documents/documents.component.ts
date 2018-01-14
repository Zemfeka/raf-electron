import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BookingsService, IDocument} from '../../../services/bookings.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [BookingsService, NgbModal, FormsModule, ReactiveFormsModule],
})
export class DocumentsComponent implements OnInit {
  documents: IDocument[] = [];
  document: IDocument = this.initialiseDocument();

  @Input() bookingId: number;
  @Output() uploadClick: EventEmitter<IDocument> = new EventEmitter<IDocument>();

  constructor(private bookingsService: BookingsService, private modalService: NgbModal) { }
  
  initialiseDocument() {
    return {Id:0,BookingId:0, DocumentType: '',DocumentName: '',DocumentExtension: '', Contents: new Blob(), IsNew:true}
  }

  deleteDocument(document: IDocument) {
    this.bookingsService.deleteDocument(document.Id)
    .subscribe(o => {
        this.getDocuments(document.BookingId);
    },error => console.log("Error :: " + error))
  }

  ngOnInit() {    
    this.getDocuments(this.bookingId);
  }

  getDocuments(bookingId) {
    this.bookingsService.getDocuments(bookingId)
          .subscribe(results => this.documents = results,
              error => console.log("Error :: " + error));
  }

  uploadDocument(event, document: IDocument) {  
    document.BookingId = this.bookingId;
    this.uploadClick.emit(document);
    this.documents.push(document);
    this.document = this.initialiseDocument();                        
  }

onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];          
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.document.DocumentName = file.name;
        this.document.DocumentExtension = file.type;
        this.document.Contents = reader.result.split(',')[1];
      };          
    }
  }

}
