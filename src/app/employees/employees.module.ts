import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './views/employees-list/employees-list.component';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';

@NgModule({
    declarations: [
        EmployeesListComponent,
        EmployeesTableComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [EmployeesListComponent]
})
export class EmployeesModule { }
