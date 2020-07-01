import { NgModule } from "@angular/core";
import { InputTextComponent } from './components/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [InputTextComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputTextComponent
    ]
})
export class ControlsModule { }
