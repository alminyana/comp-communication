import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/views/employees-list/employees-list.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CommonTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
