import { Component } from "@angular/core";
import { UsersServive } from 'src/service/users.service';

@Component({
    selector:'app-post',
    templateUrl:'post.component.html',
    styleUrls:['post.component.scss']
})

export class PostComponent{
public users:any;
    chengekey1: any;
    changekey1: any;
    constructor(private service:UsersServive){
this.getdata()
    }

getdata(){
  return this.service.post().subscribe(
     (res)=>{
        this.service.userdata=res;
        this.users=res;
        console.log(this.users)
    }
  )
}
changekey(event){
    this.changekey1=event;
     if(this.changekey1){
         this.users=this.service.userdata.filter((val,i) =>{
           return val.title==this.changekey1.title
         })
        
     }
     else{
        return this.users=this.service.userdata
    }
}
}