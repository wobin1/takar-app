import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {

  transactionDetail:any;

  constructor(private singleroute: ActivatedRoute, private api: ServerRequestService){}


  ngOnInit(){
    this.getTransactionDetail()
  }


  getTransactionDetail(){
    console.log("transaction datail is working")
    let id = this.singleroute.snapshot.paramMap.get("id")
    console.log(id)

    this.api.get("transaction/" + id).subscribe(
      res=>{
        this.transactionDetail = res.data;
        console.log(this.transactionDetail)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
