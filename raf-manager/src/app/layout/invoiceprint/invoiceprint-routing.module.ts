import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicePrintComponent } from './invoiceprint.component';

const routes: Routes = [
    {
        path: '',
        component: InvoicePrintComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoicePrintRoutingModule {}
