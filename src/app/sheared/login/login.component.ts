import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  seePassword:boolean=false;
  inputType:string='text'

  loginData = {
    "email": "",
    "password": ""
  }


  constructor(public router: RoutingService){}

  ngOnInit(){}

  // this function router user to another page
  route(page:string){
    this.router.route(page)
  }

  // this fuction clears the field on click of cancel button
  clear(field:string){
    if(field=='email'){
      this.loginData.email = "";
    }
  }


  // this function makes password visible
  passwordView(fieldType:string){
    this.seePassword = !this.seePassword;
    this.changeInputType(fieldType)
  }

  // this function change the input type of the form
  changeInputType(type:string){
    if(type=='text'){
      this.inputType = type;
    }
    if(type=='password'){
      this.inputType = type;
      console.log(type)
    }
  }

}
