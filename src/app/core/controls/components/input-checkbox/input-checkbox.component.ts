import { Component, OnInit, Input } from '@angular/core';
import { ControlComponent } from '../../interfaces/control.component';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends ControlComponent implements OnInit {

  @Input() type = 'checkbox';
  validators;

  ngOnInit(): void {
    // control si el input tiene alguna validación o no
    if (this.control.validator) {
      this.validators = this.control.validator(this.control);
    }
  }

}
