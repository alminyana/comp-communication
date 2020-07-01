import { Employee } from '../../../model/employee.interface';
import { EmployeesListRemoteService } from '../../../views/service/employees-list-remote.service';

export class EmployeesFormService {

    constructor(private readonly remoteService: EmployeesListRemoteService) { }

    saveData(data: Employee) {
        if (data.id !== null) {
            this.remoteService.updateEmployee(data);
        } else {
            this.remoteService.addEmployee(data);
        }
    }
}
