import { Component, OnInit } from '@angular/core';
import { PhotoSevice } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(
    private photoService: PhotoSevice,
    private activatedRoute: ActivatedRoute
    ){}

  photos: any[] = [];

  ngOnInit(): void {
      const userName = this.activatedRoute.snapshot.params.userName;
      this.photoService
        .listFromUser(userName)
        .subscribe(photos => this.photos = photos );
  
  }

}
