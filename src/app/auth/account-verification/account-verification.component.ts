import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent {

  response:any; 

  constructor(private api: ServerRequestService, 
              public singleRoute: ActivatedRoute,
              public router: Router
              ){}

  ngOnInit(){
    this.verifyAccount()
  }

  route(){
    this.router.navigateByUrl('')
  }

  verifyAccount(){
    let verificationToken = this.singleRoute.snapshot.paramMap.get('token')
    console.log(verificationToken)

    this.api.get('users/verify/' + verificationToken).subscribe(
      res => {
        this.response = res,
        console.log(this.response)
        this.route()
      },
      err=>{
        console.log(err)
      }
    )
  }

}
