import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!:string;
  @Input() width!:string;
  @Input() height!:string;
  @Input() border!:string;
  @Input() padding!:string;

  @Output() btnClick = new EventEmitter;


  constructor(){}

  ngOnInit(){}

  onClick(){

  }
}
