import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../../model/employee.interface';
import { ListComponent } from '../../../core/types/list.component';
import { ResultList } from '../../../core/interfaces/result-list.interface';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent extends ListComponent<ResultList<Employee>> implements OnInit {

  @Output() delete = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();

  ngOnInit() {
  }

}
