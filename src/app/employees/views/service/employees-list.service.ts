import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../../model/employee.interface';
import { ResultList } from '../../../core/interfaces/result-list.interface';
import { EmployeesListRemoteService } from './employees-list-remote.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EmployeesFormComponent } from '../../components/employees-form/employees-form.component';

@Injectable({
    providedIn: 'root'
})
export class EmployeesListService {

    private model = new Subject<ResultList<Employee>>();

    constructor(
        private remoteSrv: EmployeesListRemoteService,
        private modalService: NgbModal
    ) { }

    public get modelChanges() {
        return this.model.asObservable();
    }

    public getData() {
        const data = this.remoteSrv.getList();

        this.model.next(data);
    }

    public openAddEmployee() {
        const modal = this.modalService.open(EmployeesFormComponent);
        modal.result.then((value) => {
            if (value) {
              this.getData();
            }
          });
    }

    public openUpdateEmployee(data: Employee) {
        // const modal = this.modalService.open();
    }
}
