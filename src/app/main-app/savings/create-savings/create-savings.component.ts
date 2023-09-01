import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-create-savings',
  templateUrl: './create-savings.component.html',
  styleUrls: ['./create-savings.component.css']
})
export class CreateSavingsComponent {

  loader:boolean=false;
  response:any;
  savingsData={
    "savings_owner": "",
    "savings_name": "",
    "deposite": "",
    "savings_goal": "",
    "deadline": "",
    "product_balance": 0,
    "reciepient": "", 
  }
  constructor(public store: LocalStorageService, 
    private api: ServerRequestService, 
    public router: Router
    ){}

  ngOnInit(){}


  createProduct(){
    this.loader = true;
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    this.savingsData.savings_owner = getId.id;
    this.savingsData.reciepient = getId.id;

    console.log(this.savingsData)

    this.api.post('savings/', this.savingsData).subscribe(
      res=>{
        this.response = res;
        console.log(this.response)
        let payment_url = this.response.data[0].payment_data.data.authorization_url
        console.log(payment_url)
        window.open(payment_url)
        this.loader = false;
      },
      err=> {
        console.log(err)
        alert("there was a problem creating your savings product")
        this.loader = false;
      }

    )
  }


}
