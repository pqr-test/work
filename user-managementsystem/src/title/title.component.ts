import { Component } from "@angular/core";
import { UsersServive } from 'src/service/users.service';

@Component({
    selector:'app-title',
    templateUrl:'title.component.html',
    styleUrls:['title.component.scss']
})
export class TitleComponent{
    users:any;
    constructor(private route:UsersServive){
        this.getdata()
    }
    getdata(){
        this.route.fetchusers().subscribe(
            (res) =>{
                this.users=res;
            }
        )
    }
}