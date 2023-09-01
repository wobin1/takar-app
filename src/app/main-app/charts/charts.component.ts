import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  response:any;
  // lineChartData: Array<any> = [
  //   {data: [12000, 15000, 26000, 20000, 12000 ], label: 'Expenses'},
  //   {data: [20000, 15000, 21000, 15000, 25000], label: 'Income'},
    
  // ]

  lineChartData: Array<any> = [
    
  ]

  lineChartLabels: Array<any> = [
    'January',
    'febuary',
    'March',
    'April',
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December"
  ]

  lineChartOptions:any = {
    responsive: true
  }

  lineChartLagend = true;
  lineChartType = 'line'
  

  constructor(private api: ServerRequestService, public store: LocalStorageService){}

  ngOnInit(){
    this.getChartData()
  }

  getChartData(){
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    let user_id = getId.id

    this.api.get('chart-data/' + user_id).subscribe(
      res=>{
        this.response = res,
        this.lineChartData = this.response.data
        console.log(this.response)
      },
      err=>{console.log(err)}
    )
  }


}
