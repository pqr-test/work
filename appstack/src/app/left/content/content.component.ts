import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"app-content",
    templateUrl:"content.component.html",
    styleUrls:["content.component.scss"]

})
export class ContentComponent{
    constructor(private route:ActivatedRoute){}
}