import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BookingsService, IDocument} from '../../../services/bookings.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [BookingsService, NgbModal, FormsModule, ReactiveFormsModule,DataService],
})
export class DocumentsComponent implements OnInit {
  documents: IDocument[] = [];
  document: IDocument = this.initialiseDocument();

  @Input() bookingId: number;
  @Output() uploadClick: EventEmitter<IDocument> = new EventEmitter<IDocument>();
  
  nativeWindow: any;

  constructor(private bookingsService: BookingsService, private modalService: NgbModal, private data: DataService) {
    this.nativeWindow = data.getNativeWindow();
   }
  
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

  downloadDocument(data : IDocument) {    
    // console.log(data.Contents)
    // console.log(data.DocumentExtension);
    // let url = this.data.getGlobalUrl().createObjectURL(new Blob([data.Contents.data], { type: data.DocumentExtension }));    
    // console.log(url);
    // this.data.getNativeWindow().open(url);
    // this.data.getGlobalUrl().revokeObjectURL(url);
    this.saveTextAsFile(data);
  }

onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];          
      reader.readAsBinaryString(file);
      reader.onload = () => {
        this.document.DocumentName = file.name;
        this.document.DocumentExtension = file.type;
        this.document.Contents = reader.result;
      };          
    }
  }

  saveTextAsFile (data: IDocument){
    
    console.log(data.Contents);

    let reader = new FileReader();
    reader.readAsBinaryString(new Blob([data.Contents], {type: "arraybuffer"}));

    if(!data) {
        console.error('Console.save: No data')
        return;
    }
    var blob = new Blob([data.Contents], {type: data.DocumentExtension}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
// FOR IE:

if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  window.navigator.msSaveOrOpenBlob(blob, data.DocumentName);
}
else{
  var e = document.createEvent('MouseEvents'),
      a = document.createElement('a');

  a.download = data.DocumentName;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = [data.DocumentExtension, a.download, a.href].join(':');
  e.initEvent('click', true, false);
  a.dispatchEvent(e);
}
  }

}
