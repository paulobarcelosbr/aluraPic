import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
        { 
            path: '',
            component: HomeComponent,
            canActivate: [AuthGuard],
            children: [
                { 
                    path: '',
                    component: SigninComponent,
                }, 
                { 
                    path: 'signup',
                    component: SignUpComponent,
                },            
            ]
        },              
    ];
@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

