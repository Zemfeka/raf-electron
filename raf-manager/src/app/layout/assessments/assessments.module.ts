import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssessmentsRoutingModule } from './assessments-routing.module';
import { AssessmentsComponent } from './assessments.component';
import { PageHeaderModule } from './../../shared';
import { DocumentsModule } from '../components/documents/documents.module';

@NgModule({
    imports: [CommonModule, AssessmentsRoutingModule,PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,DocumentsModule],
    declarations: [AssessmentsComponent]
})
export class AssessmentsModule {}
