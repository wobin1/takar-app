import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  seePassword:boolean=false;
  inputType:string='text'

  registerData = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone_number": "",
    "state": "",
    "password": "",
    "confirm_password": ""
    
  }


  constructor(public router: RoutingService){}

  route(page:string){
    this.router.route(page)
    console.log("this page is clicked" + page)
  }


  // this fuction clears the field on click of cancel button
  clear(field:string){
    if(field=='email'){
      this.registerData.email = "";
    }
  }


  // this function makes password visible
  passwordView(fieldType:string){
    this.seePassword = !this.seePassword;
    this.changeInputType(fieldType)
  }

  changeInputType(type:string){
    if(type=='text'){
      this.inputType = type;
      console.log(type)
    }
    if(type=='password'){
      this.inputType = type;
      console.log(type)
    }
  }
}
