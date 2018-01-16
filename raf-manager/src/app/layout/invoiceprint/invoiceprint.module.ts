import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicePrintRoutingModule } from './invoiceprint-routing.module';
import { InvoicePrintComponent } from './invoiceprint.component';
import { DataService } from '../../services/data.service';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, InvoicePrintRoutingModule, PageHeaderModule,NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [InvoicePrintComponent],
    providers: [DataService]
})
export class InvoicePrintModule {}
