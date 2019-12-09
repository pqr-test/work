import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const ROUTES:any=[{
    path:"",
    pathMatch:"full",    
    component:PostComponent,
}
];
@NgModule({
    imports: [
       CommonModule,
       RouterModule.forChild(ROUTES),
       AccordionModule.forRoot(),
       FormsModule,
       ReactiveFormsModule
       
    ],
    declarations: [
        PostComponent
      
    ],
    providers: []
})
export class PostModule {
}