import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './views/employees-list/employees-list.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';

@NgModule({
    declarations: [
        EmployeesListComponent,
        EmployeesTableComponent,
        EmployeesFormComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class EmployeesModule { }
