import { NgModule } from '@angular/core';
import { menuComponent } from './menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        menuComponent,
    ],
    exports: [
        menuComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class menuModule{}