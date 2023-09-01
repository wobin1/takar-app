import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  seePassword:boolean=false;
  inputType:string='password'
  response:any;
  newPassword = {
    "password": "",
    "confirm_password": ""
  }

  constructor(public router: RoutingService,
      private api: ServerRequestService,
      private store: LocalStorageService
    ){}


    // this function router user to another page
    route(page:string){
      this.router.route(page)
    }
  
    // this fuction clears the field on click of cancel button
    clear(field:string){
      if(field=='email'){
        this.newPassword.password = "";
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


  // this function updates the user password to a new one
  updatePassword(){
    let get_id = this.store.getStoredData("takarPasswordResetData")
    console.log(get_id.id)
    let id = get_id.id

    this.api.post('auth/reset-password/' + id, this.newPassword).subscribe(
      res=>{
        this.response = res;
        console.log(this.response)
        this.store.removeItem("takarPasswordResetData")
        this.route('')
      }, 
      err=>{
        console.log(err)
      }
    )

    
  }
  
}
