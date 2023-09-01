import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  response:any;
  seePassword:boolean=false;
  inputType:string='text'

  recoveryEmail = {
    "email": "",
  }

  constructor(public router: Router,
              private api: ServerRequestService
            ){}


    // this function router user to another page
    route(page:any){
      this.router.navigateByUrl(page)
    }
  
    // this fuction clears the field on click of cancel button
    clear(field:string){
      if(field=='email'){
        this.recoveryEmail.email = "";
      }
    }

    // this function verifies the user email
    emailVerification(){
      this.api.post('auth/forget-password/', this.recoveryEmail).subscribe(
        res=>{
          this.response = res
          console.log(this.response)
          this.route(this.response.redirectUrl)
        },
        err=>{
          console.log(err)
        }
      )
    }
  
  

}
