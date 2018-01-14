import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { PageHeaderModule } from './../../shared';
import { DocumentsModule } from '../components/documents/documents.module';

@NgModule({
    imports: [CommonModule, ReportsRoutingModule,PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,DocumentsModule],
    declarations: [ReportsComponent]
})
export class ReportsModule {}
