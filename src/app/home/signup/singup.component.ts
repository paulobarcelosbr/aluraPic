import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenvalidateService } from './user-not-take.validator.service';


@Component({
    templateUrl:'./signup.component.html',
})
export class SignUpComponent implements OnInit{

    signupForm: FormGroup;

    constructor(
        private formBilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenvalidateService
        ){} 

    ngOnInit(): void {
        
        this.signupForm = this.formBilder.group({
            email:['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ],
                this.userNotTakenValidatorService.checkUserNameTake()
            ],
            fullName:['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
            password:['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }

}