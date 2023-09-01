import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  @Input() user!:string;
  @Input() profile_image!:string;
  @Output() btnClick = new EventEmitter()

  sidenav:boolean=true;

  constructor(){}

  ngOnInit(){}

  // this function triggers click event on the import button component
  onClick(){
    this.sidenav = !this.sidenav;
    this.btnClick.emit()
  }

}
