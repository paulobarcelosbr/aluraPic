import { PhotoSevice } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable({providedIn: 'root'})
export class PhotoListResolve implements Resolve<Observable<Photo[]>> {
    constructor(private service: PhotoSevice){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginate(userName,1);
    }
}