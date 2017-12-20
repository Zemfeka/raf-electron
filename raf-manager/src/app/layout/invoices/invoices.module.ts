import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';

@NgModule({
    imports: [CommonModule, InvoicesRoutingModule],
    declarations: [InvoicesComponent]
})
export class InvoicesModule {}
