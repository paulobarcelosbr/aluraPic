import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = "http://localhost:3000"
@Injectable({ providedIn:'root'})
export class SignUpService{
    constructor(private http: HttpClient){}

    checkeUserNameTaken(userName:string){
        return this.http.get(URL_API + 'user/exists/'+userName);
    }    
}