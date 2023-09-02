import { Component } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loader:boolean=false;
  seePassword:boolean=false;
  inputType:string='password'
  response:any;
  registerData = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone_number": "",
    "password": "",
    "current_site": "http://localhost:4200/acount-verification/"
  }


  constructor(public router: RoutingService, private api: ServerRequestService, ){}

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

  register(){
    this.loader=true;
    console.log(this.registerData)
    this.api.post('users/create/', this.registerData).subscribe(
      res => {
        this.response = res
        console.log(this.response)
        // this.route('signin')
        this.loader=false;
      },
      err => {
        console.log(err)
        this.loader=false;
      }
    )
  }
}
