import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee.interface';
import { ResultList } from '../../../core/interfaces/result-list.interface';
import { RemoteService } from '../../../core/types/remote.service';
import { AppUtils } from '../../../core/utils/app-utils';

@Injectable({
    providedIn: 'root'
})
export class EmployeesListRemoteService extends RemoteService {

    private employeeList: Employee[] = [];

    getList(): ResultList<Employee> {
        if (!this.employeeList || !this.employeeList.length) {
            for (let i = 0; i < 6; i++) {
               this.employeeList.push({
                   id: i,
                   name: `Name ${i}`,
                   surname: `Surname ${i}`,
                   external: i % 2 === 0 ? true : false,
                   code: AppUtils.generateNum()
               });
            }
        }

        return {list: this.employeeList};
    }

    addEmployee(employee: Employee): void {
        employee.id = this.employeeList.length;
        employee.code = AppUtils.generateNum();
        this.employeeList.push(employee);
    }

    updateEmployee(employee: Employee) {
        const data = this.employeeList.find( (obj: Employee) => obj.id === employee.id);
        Object.assign(data, employee);
    }

    deleteEmployee(employee: Employee) {
        const index = this.employeeList.findIndex( (obj: Employee) => obj.id === employee.id);
        this.employeeList.splice(index, 1);
    }
}
