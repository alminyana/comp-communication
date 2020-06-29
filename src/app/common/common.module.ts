import { NgModule } from '@angular/core';
import { CommonTableComponent } from './common-table/common-table.component';

@NgModule({
    declarations: [
        CommonTableComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [CommonTableComponent]
})
export class CommonModule { }
