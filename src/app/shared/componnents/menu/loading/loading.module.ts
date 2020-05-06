import { NgModule } from '@angular/core';
import { LoadingType } from './loading-type';
import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInteceptor } from './loading.interceptor';

@NgModule({
    declarations:[
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ],
    imports:[
        CommonModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInteceptor,
        multi: true
    }]
})
export class LoadingModule{}