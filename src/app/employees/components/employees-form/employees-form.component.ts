import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesFormService } from './service/employees-form.service';
import { ModalComponent } from '../../../core/types/modal.component';
import { Employee } from '../../model/employee.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent extends ModalComponent<Employee> {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private readonly service: EmployeesFormService
  ) {
    super(activeModal);
    this.form = this.fb.group({
      id: [null, []],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      code: [null, []]
    });
  }

  submit() {
    if (this.form.valid) {
      this.service.saveData(this.form.value);
      this.activeModal.close(true);
    } else {
      this.markAsDirty();
    }
  }

  setData(obj) {
    this.form.setValue(obj);
  }

  markAsDirty() {
    this.form.markAsDirty();
    Object.keys(this.form.controls).forEach( (col) => {
      this.form.get(col).markAsDirty();
    });
  }

}
