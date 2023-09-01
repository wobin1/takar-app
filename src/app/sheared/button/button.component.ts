import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() btnClick = new EventEmitter;

  sidenave:boolean = true;


  constructor(){}

  ngOnInit(){}

  onClick(){
    this.btnClick.emit()
  }
}
