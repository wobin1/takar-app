import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() page!:string;
  @Input() button!:string;
  @Input() action!:boolean;
  @Input() detail!:string;
  @Input() alawiDetail:any;
  @Input() savingsDetail:any;
  @Input() transactionDetail:any;


  constructor(private singleroute: ActivatedRoute, private api: ServerRequestService){}


  ngOnInit(){

  }


 


  


}
