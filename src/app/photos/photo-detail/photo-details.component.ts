import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoSevice } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl:'./photo-details.component.html',
  
})
export class PhotoDetailsComponent implements OnInit{

    photo$: Observable<Photo>;
    photoId: number;
    constructor(
        private route: ActivatedRoute,
        private photoSevice: PhotoSevice,
    ){}
    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoSevice.findById(this.photoId);                   
    }
}

