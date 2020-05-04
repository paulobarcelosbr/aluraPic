import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoSevice } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/componnents/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoSevice,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService

    ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file:['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }

  upload(){

    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService
        .upload(description,allowComments,this.file)
        .pipe(finalize(()=> {
          this.router.navigate(['/user',this.userService.getUserName()])
        }))
        .subscribe((event: HttpEvent <any>) => {
          if(event.type == HttpEventType.UploadProgress){
            this.percentDone = Math.round(100 * event.loaded / event.total);
          }else if (event.type == HttpEventType.Response){
            this.alertService.success('Upload Complete',true)
          }
        },err =>{
          console.log(err);
          this.alertService.danger('Upload error!',true);
        })
  }
  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
