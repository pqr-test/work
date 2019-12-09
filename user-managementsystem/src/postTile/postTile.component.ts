import { Component } from "@angular/core";
import { UsersServive } from 'src/service/users.service';

@Component({
    selector:'app-postTile',
    templateUrl:'postTile.component.html',
    styleUrls:['postTile.component.scss']
})
export class PostTileComponent{

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