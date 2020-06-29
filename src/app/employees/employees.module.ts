import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './views/employees-list/employees-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        EmployeesListComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [EmployeesListComponent]
})
export class EmployeesModule { }
