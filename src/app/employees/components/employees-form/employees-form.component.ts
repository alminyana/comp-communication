import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesFormService } from './service/employees-form.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private readonly service: EmployeesFormService
  ) { }

  ngOnInit() {
  }

}
