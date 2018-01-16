import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { PageHeaderModule } from './../../shared';
import { DataService } from '../../services/data.service';

@NgModule({
    imports: [CommonModule, InvoicesRoutingModule,PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [InvoicesComponent],
    providers: [DataService]
})
export class InvoicesModule {}
