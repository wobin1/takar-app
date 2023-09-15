import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service/helper.service';
import { RoutingService } from 'src/app/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-savings-list',
  templateUrl: './savings-list.component.html',
  styleUrls: ['./savings-list.component.css']
})
export class SavingsListComponent {
  savings:any;
  constructor(private api: ServerRequestService, 
                private user_id: HelperService,
                private router: RoutingService){}

  ngOnInit(){
    this.getSavings()
  }

  getSavings(){
    this.api.get('savings/'+ this.user_id.getUserId()).subscribe(
      res=>{this.savings = res, console.log(this.savings)},
      err=>{console.log(err)}
    )
  }


  getSavingsDetail(page:string){
    this.router.routeDetail(page)
  }



}
