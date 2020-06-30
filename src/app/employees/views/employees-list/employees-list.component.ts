import { Component, OnInit } from '@angular/core';
import { EmployeesListService } from '../service/employees-list.service';
import { ResultList } from '../../../core/interfaces/result-list.interface';
import { Employee } from '../../model/employee.interface';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  model: ResultList<Employee>;

  constructor(private readonly service: EmployeesListService) {
    this.service.modelChanges.subscribe(
      (model) => {
        this.model = model;
      }
      );
    }

  ngOnInit() {
    this.service.getData();
    console.log(this.model);
  }

}
