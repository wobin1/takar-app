import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {

  transaction_history:any;
  constructor(private api: ServerRequestService, public store: LocalStorageService){}

  ngOnInit(){
    this.getHistory()
  }

  getHistory(){
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    

    this.api.get('limited-history/' + getId.id).subscribe(
      res=>{
        this.transaction_history = res,
        console.log("transaction history")
        console.log(this.transaction_history)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
