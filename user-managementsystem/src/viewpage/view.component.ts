import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { UsersServive } from 'src/service/users.service';

@Component({
    selector:'app-view',
    templateUrl:'view.component.html',
    styleUrls:['view.component.scss']
})
export class ViewComponent{
    public id:any=[];
    public currentuser:any;
    
  constructor(private view:UsersServive,
              private route:ActivatedRoute
              
    ) {
        this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                console.log(this.id);
                this.getdata()
            }
        )
    } 
    getdata(){
        return this.view.fetchUsers1(this.id).subscribe(
            (res) => {
                this.currentuser=res;
                console.log(this.currentuser)
            }
        )
    }

    
}