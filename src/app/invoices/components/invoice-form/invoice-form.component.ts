import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceFormService } from './service/invoice-form.service';
import { ModalComponent } from '../../../core/types/modal.component';
import { Invoice } from '../../model/invoice.interface';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent extends ModalComponent<Invoice> {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private readonly service: InvoiceFormService
  ) {
    super(activeModal);

    this.form = this.fb.group({
      street: [null, [Validators.required]],
      streetType: [null, []],
      municipality: [null, []],
      zipCode: [null, []],
      province: [null, []]
    });
  }

  setData(obj) {
    this.form.setValue(obj);
  }

  submit() {
    if (this.form.valid) {
      this.service.saveData(this.form.value);
      this.activeModal.close(true);
    } else {
      this.markAsDirty();
    }
  }

  markAsDirty() {
    this.form.markAsDirty();
    Object.keys(this.form.controls).forEach( (prop) => this.form.get(prop).markAsDirty());
  }

}
