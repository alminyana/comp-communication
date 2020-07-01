import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { InputTextComponent } from './controls/components/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
