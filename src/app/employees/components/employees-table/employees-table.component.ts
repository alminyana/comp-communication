import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee.interface';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  @Output() delete = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();

  ngOnInit() {
  }

}
