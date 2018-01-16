import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },            
            { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'assessments', loadChildren: './assessments/assessments.module#AssessmentsModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'invoices', loadChildren: './invoices/invoices.module#InvoicesModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },            
            { path: 'invoiceprint', loadChildren: './invoiceprint/invoiceprint.module#InvoicePrintModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
