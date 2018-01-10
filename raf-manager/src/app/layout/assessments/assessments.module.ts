import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssessmentsRoutingModule } from './assessments-routing.module';
import { AssessmentsComponent } from './assessments.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AssessmentsRoutingModule,PageHeaderModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,],
    declarations: [AssessmentsComponent]
})
export class AssessmentsModule {}
