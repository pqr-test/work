import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from 'src/title/title.component';
import { LoginComponent } from 'src/login/login.component';
import { ViewComponent } from 'src/viewpage/view.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormComponent } from 'src/form/form.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/home/home.component';
import { PostTileComponent } from 'src/postTile/postTile.component';
import { EditComponent } from 'src/edit/edit.component';
import { AuthgurdService } from 'src/service/authguard.service';
import { PostComponent } from 'src/post/post.component';
import { CommentsComponent } from 'src/comments/comments.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


const ROUTES:any=[{
path:'',
redirectTo:'/form',
pathMatch:'full'
},
{
path:'users',
loadChildren:'../users/users.module#UsersModule',
canActivate:[ AuthgurdService]
},
{
  path:'post',
 component:PostComponent
},
{
  path:"comments",
  component:CommentsComponent
},
{
  path:"title",
  component:TitleComponent
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"viewpage/:id",
  component:ViewComponent
},
{
  path:"form",
  component:FormComponent  
},
{
  path:"home",
  component:HomeComponent 
},
{
  path:"postTile",
  component:PostTileComponent
},
{
  path:"edit",
  component:EditComponent
}
]



@NgModule({
  declarations: [
    AppComponent,PostComponent,CommentsComponent,
    HeaderComponent,
    NavbarComponent,
    TitleComponent,
    LoginComponent,
    ViewComponent,
    FormComponent,
    HomeComponent,
    PostTileComponent,
    EditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PaginationModule.forRoot(),
    HttpClientModule,
    NgSelectModule,
    FormsModule ,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES,{
          useHash:true
    }),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
