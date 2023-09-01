import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any;
  constructor(private api: ServerRequestService){}

  ngOnInit(){
    this.getProducts()
  }

  getProducts(){
    this.api.get('alawi/').subscribe(
      res=>{this.products = res, console.log(this.products)},
      err=>{console.log(err)}
    )
  }

}
