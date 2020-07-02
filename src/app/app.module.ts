import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { EmployeesModule } from './employees/employees.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesListComponent } from './invoices/views/invoices-list/invoices-list.component';
import { InvoicesModule } from './invoices/invoices.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    CommonModule,
    EmployeesModule,
    InvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
