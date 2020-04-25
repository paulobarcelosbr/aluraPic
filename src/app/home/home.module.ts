import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/componnents/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: 
    [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        HomeRoutingModule       
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule{

}