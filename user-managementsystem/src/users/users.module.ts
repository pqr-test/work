import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/Modal';
import { PopoverModule } from 'ngx-bootstrap/Popover';
const ROUTES:any=[{
    path:"",
    pathMatch:"full",    
    component:UsersComponent,
}
];
@NgModule({
    imports: [
       CommonModule,
       RouterModule.forChild(ROUTES),
       NgSelectModule,
       TooltipModule.forRoot(),
       ModalModule.forRoot(),
       PopoverModule.forRoot()
       
    ],
    declarations: [
        UsersComponent
      
    ],
    providers: []
})
export class UsersModule {
}