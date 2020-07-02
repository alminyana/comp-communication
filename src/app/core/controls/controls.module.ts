import { NgModule } from '@angular/core';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';

@NgModule({
    declarations: [InputTextComponent, InputCheckboxComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputTextComponent,
        InputCheckboxComponent
    ]
})
export class ControlsModule { }
