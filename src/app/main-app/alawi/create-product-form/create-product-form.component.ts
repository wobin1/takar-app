import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {

  loader:boolean=false;
  response:any;
  productData={
    "product_owner": "",
    "product_name": "",
    "payment_sequence": "",
    "amount_to_be_paid": 0,
    "initial_deposite": 0,
    "product_balance": 0,
    "reciepient": "",
    "product_amount": ""  
  }
  constructor(public store: LocalStorageService, 
    private api: ServerRequestService, 
    public router: Router
    ){}

  ngOnInit(){}


  createProduct(){
    this.loader=true;
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    this.productData.product_owner = getId.id;
    this.productData.reciepient = getId.id;

    console.log(this.productData)

    this.api.post('alawi/', this.productData).subscribe(
      res=>{
        this.response = res;
        console.log(this.response)
        if(this.response.message){
          let payment_url = this.response.data[0].payment_data.data.authorization_url
          console.log(payment_url)
          window.open(payment_url)
        }else{
          alert("there was a problem creating your product")
        }

      },
      err=> {
        console.log(err.error)
        alert("there was an error creating your product")
        this.loader = false;
      }
    )
  }



}
