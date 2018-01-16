import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentsComponent } from './documents.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


@NgModule({
    imports: [CommonModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [DocumentsComponent, FileSelectDirective],
    exports: [DocumentsComponent]
})

export class DocumentsModule {}