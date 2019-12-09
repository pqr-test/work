import { Component} from "@angular/core";
import { UsersServive } from 'src/service/users.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-comments',
    templateUrl:'comments.component.html',
    styleUrls:['comments.component.scss']
})

export class CommentsComponent {
  public mypage;
  pageresponse;
  currentpage;
  page: any;
  
    constructor(private service:UsersServive ,private router:Router){
      this.getdata()
          }
      
      getdata(){
        var that=this;
        this.service.comments().subscribe(res =>{
              that.pageresponse=res;
              console.log(that.pageresponse);
          })
        }
       
  pageChanged(event: any): void {
  this.page=event.page;
  if(this.page==1){
    this.service.pagenationuser('_page=1&_limit=15').subscribe(res =>{
     this.pageresponse=res;
    })
  }
  if(this.page==2){
    this.service.pagenationuser('_page=2&_limit=15').subscribe(res =>{
     this.pageresponse=res;
    })
  }
  if(this.page==3){
    this.service.pagenationuser('_page=3&_limit=15').subscribe(res =>{
     this.pageresponse=res;
    })
  }
  if(this.page==4){
    this.service.pagenationuser('_page=4&_limit=15').subscribe(res =>{
     this.pageresponse=res;
    })
  }
  if(this.page==5){
    this.service.pagenationuser('_page=5&_limit=15').subscribe(res =>{
     this.pageresponse=res;
    })
  }
}
}


      
     