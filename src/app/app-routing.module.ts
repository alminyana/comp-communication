import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/views/employees-list/employees-list.component';
import { InvoicesListComponent } from './invoices/views/invoices-list/invoices-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'invoices',
    component: InvoicesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
