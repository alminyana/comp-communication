import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './views/invoices-list/invoices-list.component';
import { ControlsModule } from '../core/controls/controls.module';
import { InvoiceTableComponent } from './components/invoice-table/invoice-table.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

@NgModule({
    declarations: [
        InvoicesListComponent,
        InvoiceTableComponent,
        InvoiceFormComponent
    ],
    entryComponents: [InvoiceFormComponent],
    imports: [
        CommonModule,
        ControlsModule
    ]
})
export class InvoicesModule { }
