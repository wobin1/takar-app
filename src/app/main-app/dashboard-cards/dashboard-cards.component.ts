import { Component, Input, Output, OnInit } from '@angular/core';
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
  savings_percentage:any;
  transaction_history:any;
  expenses:any;
  income:any;
  constructor(private api: ServerRequestService, public store: LocalStorageService){}

  ngOnInit(){
    this.getSavingsCount()
    this.getAlawiCount()
  }



  // this function is getting savings count
  getSavingsCount(){
    console.log("savings count function working")
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    let user_id = getId.id

    this.api.get( 'savings-total/' + user_id).subscribe(
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
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    let user_id = getId.id

    this.api.get( 'alawi-total/' + user_id).subscribe(
      res=>{this.alawi_count = res, 
            console.log(this.alawi_count),
            this.alawi_number = this.alawi_count.product_number;
            this.alawi_balance = this.alawi_count.alawi_balance
          },
      err=>{console.log(err)}
    )
  }


}
