import { Component, Input } from "@angular/core";

@Component({
    selector:"app-text",
    templateUrl:"text.component.html",
    styleUrls:["text.component.scss"]
})
export class TextComponent {
    @Input()
  public aaa:any=null;

}