import { Component } from "@angular/core";
import { UsersServive } from 'src/service/users.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector:'app-users',
    templateUrl:'users.component.html',
    styleUrls:['users.component.scss']
})

export class UsersComponent{
public users:any;
    changekey: any;
    
    modalRef: BsModalRef;
    constructor(private service:UsersServive,
                private modalService: BsModalService,
                private route:Router){
               this.getdata()
    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

getdata(){
  return this.service.fetchusers().subscribe(
     (res)=>{
         this.service.userdata=res;
        this.users=res;
        console.log(this.users)
    }
  )
}
namechange(event){
    this.changekey=event;
    if(this.changekey){
        this.users=this.service.userdata.filter((name,i) =>{
          return name.name==this.changekey.name
        }
        )
    }
    else{
        return this.users=this.service.userdata
    }
}
gotologin(){
  localStorage.removeItem("token")
  this.route.navigate(["form"])
}

}