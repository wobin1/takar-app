import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-savings-detail',
  templateUrl: './savings-detail.component.html',
  styleUrls: ['./savings-detail.component.css']
})
export class SavingsDetailComponent {

  savingsDetail:any;

  constructor(private singleroute: ActivatedRoute, private api: ServerRequestService){}


  ngOnInit(){
    this.getSavingsDetail()
  }


  getSavingsDetail(){
    console.log("savings datail is working")
    let id = this.singleroute.snapshot.paramMap.get("id")
    console.log(id)

    this.api.get("savings/detail/" + id).subscribe(
      res=>{
        this.savingsDetail = res.data[0];
        console.log(this.savingsDetail)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
