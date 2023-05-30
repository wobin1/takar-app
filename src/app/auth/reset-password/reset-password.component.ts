import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  seePassword:boolean=false;
  inputType:string='text'

  recoveryEmail = {
    "email": "",
  }

  constructor(public router: RoutingService){}


    // this function router user to another page
    route(page:string){
      this.router.route(page)
    }
  
    // this fuction clears the field on click of cancel button
    clear(field:string){
      if(field=='email'){
        this.recoveryEmail.email = "";
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
