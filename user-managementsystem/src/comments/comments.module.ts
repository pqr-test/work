import {  NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTE:any=[{
    path:" ",
    pathMatch:'full',
    component:CommentsComponent
        
}];
@NgModule({
    declarations: [
        CommentsComponent
    ],
    imports: [
        RouterModule.forChild(ROUTE),
        CommonModule,
       
        FormsModule,
        ReactiveFormsModule
       

    ],
    providers: []
})
export class ComponentModule{

}