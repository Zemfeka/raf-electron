import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BookingsService, IDocument} from '../../../services/bookings.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'http://localhost:3000/documents';

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
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'file'});

  constructor(private bookingsService: BookingsService, private modalService: NgbModal, private data: DataService) {
    this.nativeWindow = data.getNativeWindow();    
   }
  
  initialiseDocument() {
    return {Id:0,BookingId:0, DocumentType: '',DocumentName: '',DocumentExtension: '', Contents: new Blob(), IsNew:true,Path: ''}
  }

  deleteDocument(document: IDocument) {
    this.bookingsService.deleteDocument(document.Id)
    .subscribe(o => {
        this.getDocuments(document.BookingId);
    },error => console.log("Error :: " + error))
  }

  ngOnInit() {    
     //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

     //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:string, status:any, headers:any) => {
        //add the file record to the documents table       
        if(status != "422") {
          this.document.BookingId = this.bookingId;
          this.document.DocumentExtension = item.file.type;
          this.document.DocumentName = item.file.name;
          this.document.Contents = null;//item.file.rawFile;
          //uploads                    
          this.document.Path = response;
          this.uploadDocument(this.document);
        }        

    };
    this.getDocuments(this.bookingId);
  }

  getDocuments(bookingId) {
    this.bookingsService.getDocuments(bookingId)
          .subscribe(results => this.documents = results,
              error => console.log("Error :: " + error));
  }

  uploadDocument(document: IDocument) {    
    // document.BookingId = this.bookingId;
    // this.uploadClick.emit(document);
    // this.documents.push(document);
    // this.document = this.initialiseDocument();     

    //save the documents
    console.log(document);
    this.bookingsService.saveDocument(document).subscribe(d => {
      this.documents.push(document);
      this.document = this.initialiseDocument();
    },
    error => console.log("Error :: " + error));   
                            
  }

  downloadDocument(data : IDocument) {  
    //download document using File/Blob

    // console.log(data.Contents)
    // console.log(data.DocumentExtension);
    // let url = this.data.getGlobalUrl().createObjectURL(new Blob([data.Contents.data], { type: data.DocumentExtension }));    
    // console.log(url);
    // this.data.getNativeWindow().open(url);
    // this.data.getGlobalUrl().revokeObjectURL(url);

    //download document using file path.
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
