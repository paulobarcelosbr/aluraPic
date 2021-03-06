import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/componnents/alert/alert.module';
import { menuModule } from '../shared/componnents/menu/menu.module';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';
import { LoadingModule } from '../shared/componnents/menu/loading/loading.module';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        AlertModule,
        menuModule,
        ShowIfLoggedModule,
        LoadingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModel{

}