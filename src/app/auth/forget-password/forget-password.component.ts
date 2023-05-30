import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

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
  
  

}
