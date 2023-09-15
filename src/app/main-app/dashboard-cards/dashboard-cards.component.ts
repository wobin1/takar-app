import { Component, Input, Output, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service/helper.service';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent {
  @Input() color!:string;
  @Input() amount!:string;
  @Input() label!:string;

  savings_count:any;
  savings_number:any;
  saved_amount:any;
  alawi_count:any;
  alawi_number:any;
  alawi_balance:any;
  savings:any;
  wallet:any;
  savings_percentage:any;
  transaction_history:any;
  expenses:any;
  income:any;
  constructor(private api: ServerRequestService, private user_id: HelperService){}

  ngOnInit(){
    this.getSavingsCount()
    this.getAlawiCount()
    this.getWalletDetails()
  }



  // this function is getting savings count
  getSavingsCount(){
    console.log("savings count function working")


    this.api.get( 'savings-total/' + this.user_id.getUserId()).subscribe(
      res=>{this.savings_count = res, 
            console.log(this.savings_count),
            this.savings_number = this.savings_count.savings_number;
            this.saved_amount = this.savings_count.total_savings
          },
      err=>{console.log(err)}
    )
  }

  // this function is getting the alawi count
  getAlawiCount(){
    console.log("Alawi count function working")

    this.api.get( 'alawi-total/' + this.user_id.getUserId()).subscribe(
      res=>{this.alawi_count = res, 
            console.log(this.alawi_count),
            this.alawi_number = this.alawi_count.product_number;
            this.alawi_balance = this.alawi_count.alawi_balance
          },
      err=>{console.log(err)}
    )
  }


  // this function get user wallet details
  getWalletDetails(){
    console.log("wallet function triggered")
    this.api.get('wallet/' + this.user_id.getUserId()).subscribe(
      res=>{
        this.wallet = res;
        console.log("below is the wallet details")
        console.log(this.wallet)
      },
      err=>{
        console.log(err)
      }
    )
  }




}
