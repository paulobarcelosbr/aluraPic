import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoSevice } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';
import { Alert } from 'src/app/shared/componnents/alert/alert';
import { AlertService } from 'src/app/shared/componnents/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';


@Component({
    templateUrl:'./photo-details.component.html',
  
})
export class PhotoDetailsComponent implements OnInit{

    photo$: Observable<Photo>;
    photoId: number;
    constructor(
        private route: ActivatedRoute,
        private photoSevice: PhotoSevice,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ){}
    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoSevice.findById(this.photoId);   
        this.photo$ .subscribe(() => {},err =>{
            console.log(err);
            this.router.navigate(['not-found'])
        })               
    }
    remove(){
        this.photoSevice
        .removePhoto(this.photoId)
        .subscribe(()=> {
            this.alertService.success("photo removed",true);
            this.router.navigate(['/user',this.userService.getUserName()])
        },
        err => {
            console.log(err);
            this.alertService.warning('Could not Delete the Photo!')
        });
    }
    like(photo: Photo){
        this.photoSevice.like(photo.id)
        .subscribe(liked => {
            if(liked){
                this.photo$ = this.photoSevice.findById(photo.id);
            }
        })
    }
}

