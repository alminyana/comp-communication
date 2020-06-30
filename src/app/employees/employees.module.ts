import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './views/employees-list/employees-list.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';

@NgModule({
    declarations: [
        EmployeesListComponent,
        EmployeesTableComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmployeesModule { }
