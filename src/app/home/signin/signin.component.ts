import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl:'./signin.component.html'
})
export class SigninComponent implements OnInit{

    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private plataformDetectorService: PlataformDetectorService,
        private activateRoute: ActivatedRoute
    ){ }
    ngAfterViewInit():void{
        this.plataformDetectorService.isPlataformBrowser() && this.userNameInput.nativeElement.focus();
    }
    ngOnInit(): void {
        this.activateRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl);

        this.loginForm = this.formBuilder.group({
            userName: ['',Validators.required],
            password: ['',Validators.required],
        });
    }
    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .Authenticate(userName,password)
            .subscribe(
                ()=>  this.fromUrl
                        ? this.router.navigateByUrl(this.fromUrl)
                        : this.router.navigate(['user',userName]),                   
                err =>{  
                    console.log(err);
                    this.loginForm.reset();
                    this.plataformDetectorService.isPlataformBrowser() && this.userNameInput.nativeElement.focus();
                }
            );
    }
}