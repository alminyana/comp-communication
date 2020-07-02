import { Component, OnInit, Input } from '@angular/core';
import { ControlComponent } from '../../interfaces/control.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends ControlComponent implements OnInit {
  @Input() type = 'text';
  validators;

  ngOnInit(): void {
    if (this.control.validator) {
      this.validators = this.control.validator(this.control);
    }
  }
}
