import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper-service/helper.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  alawiDetail!:any;

  constructor(private singleroute: ActivatedRoute, private api: ServerRequestService){}


  ngOnInit(){
    this.getAlawiDetail()
  }


  getAlawiDetail(){
    console.log("get alawi working perfectly fine")
    let id = this.singleroute.snapshot.paramMap.get("id")
    console.log(id)

    this.api.get("alawi/" + id).subscribe(
      res=>{
        this.alawiDetail = res.data;
        console.log(this.alawiDetail)
      },
      err=>{
        console.log(err)
      }
    )
  }




}
