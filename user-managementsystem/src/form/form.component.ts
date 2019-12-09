import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector:'app-form',
    templateUrl:'form.component.html',
    styleUrls:['form.component.scss']
})
export class FormComponent{
    username:any;
    password:any;
    constructor(private route:Router
        ){ }
    validate(){
        if(this.username=="aswini" && this.password=="12345"){
            localStorage.setItem('token','validtoken')
            this.route.navigate(['/users'])
        }
    }
}
