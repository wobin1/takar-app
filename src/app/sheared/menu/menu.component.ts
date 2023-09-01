import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() btnClick = new EventEmitter;
  @Input() buttonType!:string;

  signin:boolean=true;
  register:boolean=true;
  home:boolean=true;
  about:boolean=true;
  product:boolean=true;
  contact:boolean=true;


  constructor(public router: Router){}

  // this function runs on page load
  ngOnInit(){
      this.activeMenu(this.buttonType)
  }

  // this function accept a click event from anywhere this component is click
  onClick(){
    this.btnClick.emit()
    console.log("auth button clicked")
    // this.activeMenu(page)
  }

  activeAuthMenu(page:string){
    this.activeMenu(page)
    if(page=='register'){
      this.router.navigateByUrl('registration')
    }
    if(page=='signin'){
      this.router.navigateByUrl('')
    }

    
  }



  // this function assign active menu
  activeMenu(button:string){
    if(button=='signin'){
      this.signin = !this.signin;
      this.register = true;
      this.home = true;
      this.about = true;
      this.product = true;
      this.contact = true;
    }
    if(button=='register'){
      this.register = !this.register
      this.signin = true;
      this.home = true;
      this.about = true;
      this.product = true;
      this.contact = true;
    }
    if(button=='home'){
      this.register = true;
      this.signin = true;
      this.home = !this.home;
      this.about = true;
      this.product = true;
      this.contact = true;
    }
    if(button=='about'){
      this.register = true;
      this.signin = true;
      this.home = true;
      this.about = !this.about;
      this.product = true;
      this.contact = true;
    }
    if(button=='product'){
      this.register = true;
      this.signin = true;
      this.home = true;
      this.about = true;
      this.product = !this.product;
      this.contact = true;
    }
    if(button=='contact'){
      this.register = true;
      this.signin = true;
      this.home = true;
      this.about = true;
      this.product = true;
      this.contact = !this.contact;
    }
  }

}
