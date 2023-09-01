import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  seePassword:boolean=false;
  inputType:string='password'
  loginData = {
    "email": "",
    "password": ""
  }
  response:any;
  loader:boolean=false;


  constructor(public router: RoutingService, private api: ServerRequestService, public store: LocalStorageService){}

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

  // this function facilitates login
  login(){
    // console.log(this.loginData)
    this.loader = true;

    this.api.post("auth/login/", this.loginData).subscribe(
      res=>{
        this.response = res,
        console.log(this.response)
        if(this.response.message){
          this.store.saveItemObject("takaruser", this.response.data)
          this.route('dashboard')
          this.loader=false;
        }else{
          alert("Invalid email or password")
          this.loader = false;
        }
      },
      err=>{
        console.log(err)
      }
    )
  }


}
