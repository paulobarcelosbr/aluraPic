import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class LoadingInteceptor implements HttpInterceptor{
    constructor(
        private loadingService: LoadingService
    ){}
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
        return next
            .handle(req)
            .pipe(tap(event => {
                if(event instanceof HttpResponse){
                    this.loadingService.stop()
                }else{
                    this.loadingService.start();
                }
            }))
    }
}