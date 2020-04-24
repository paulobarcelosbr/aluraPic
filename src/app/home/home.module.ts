import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/componnents/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/singup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent
    ],
    imports: 
    [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule{

}