import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';


@Injectable({
    providedIn:'root'
})
export class UsersServive {
  
    public userdata:any;
  pageresponse: any;
    constructor(private http:HttpClient,
                private route:ActivatedRoute
        ){
        
    }
fetchusers(){
return this.http.get("https://jsonplaceholder.typicode.com/users")
}

fetchUsers1(id){
return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
}
post(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
comments(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=15");
        }
pagenationuser(data){
            return this.http.get("https://jsonplaceholder.typicode.com/comments?"+data);
            }
        

}