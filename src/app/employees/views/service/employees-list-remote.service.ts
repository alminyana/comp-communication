import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee.interface';
import { ResultList } from '../../../core/interfaces/result-list.interface';

@Injectable({
    providedIn: 'root'
})
export class EmployeesListRemoteService {

    private employeeList: Employee[];

    getList(): ResultList<Employee> {
        if (!this.employeeList || !this.employeeList.length) {
            this.employeeList = [];
            for (let i = 0; i < 6; i++) {
               this.employeeList.push({
                   id: i,
                   name: `Name ${i}`,
                   surname: `Surname ${i}`,
                   code: 0
               });
            }
        }

        return {list: this.employeeList};
    }
}
