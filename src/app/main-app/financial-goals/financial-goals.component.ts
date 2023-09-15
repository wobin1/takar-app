import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service/helper.service';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-financial-goals',
  templateUrl: './financial-goals.component.html',
  styleUrls: ['./financial-goals.component.css']
})
export class FinancialGoalsComponent {

  @Input() title!:string;
  @Input() percentage!:string;


  savings:any;
  constructor(private api: ServerRequestService, public user_id: HelperService){}

  ngOnInit(){
    this.getSavings()
  }


  // this function is getting the savings goals and percentage
  getSavings(){

    this.api.get('savings/' + this.user_id.getUserId()).subscribe(
      res=>{
        this.savings = res,
        console.log(this.savings)
      },
      err=>{console.log(err)}
    )
  }


  // this code calculate the percentage
  savingsPercentage(savings_goal:any, amount_saved:any){
      let percentage = amount_saved/savings_goal *100;
  }



}
