import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';
import { DatePipe } from '@angular/common';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any;
  constructor(private api: ServerRequestService, 
                private store: LocalStorageService,
                private router: RoutingService){}

  ngOnInit(){
    this.getProducts()
  }

  getProducts(){
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    let user_id = getId.id
    this.api.get('alawi/user-alawi/' + user_id).subscribe(
      res=>{this.products = res, console.log(this.products)},
      err=>{console.log(err)}
    )
  }

  getProductDetail(page:string){
    this.router.routeDetail(page)
  }

}
