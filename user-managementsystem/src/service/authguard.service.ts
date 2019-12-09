import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class AuthgurdService implements CanActivate{
    constructor(private route:Router){}
    canActivate():boolean{
        if(localStorage.getItem('token')=="validtoken"){
            return true
        }
        else{
            return false            
        }
    }
}
