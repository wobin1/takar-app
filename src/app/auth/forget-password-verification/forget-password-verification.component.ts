import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-forget-password-verification',
  templateUrl: './forget-password-verification.component.html',
  styleUrls: ['./forget-password-verification.component.css']
})
export class ForgetPasswordVerificationComponent {

  response:any;
  constructor(private api: ServerRequestService, 
              public singleRouter: ActivatedRoute,
              private store: LocalStorageService,
              public router: RoutingService
              ){}

  ngOnInit(){
    this.verifyForgetPasswordEmail()
  }

  verifyForgetPasswordEmail(){
    let token = this.singleRouter.snapshot.paramMap.get('token')

    console.log(token)
    this.api.get('auth/verify-password-recovery/'+ token).subscribe(
      res=>{
        this.response = res,
        console.log(this.response)
        this.store.saveItemObject("takarPasswordResetData", this.response.data)
        this.router.route('reset-password')
      },
      err=>{
        console.log(err)
      }
    )
  }

}
