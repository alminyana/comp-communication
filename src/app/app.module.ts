import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/views/employees-list/employees-list.component';
import { CommonTableComponent } from './common/common-table/common-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CommonTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
