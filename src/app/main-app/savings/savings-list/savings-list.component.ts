import { Component } from '@angular/core';
import { ServerRequestService } from 'src/app/services/server-request-service/server-request.service';

@Component({
  selector: 'app-savings-list',
  templateUrl: './savings-list.component.html',
  styleUrls: ['./savings-list.component.css']
})
export class SavingsListComponent {
  savings:any;
  constructor(private api: ServerRequestService){}

  ngOnInit(){
    this.getSavings()
  }

  getSavings(){
    this.api.get('savings/').subscribe(
      res=>{this.savings = res, console.log(this.savings)},
      err=>{console.log(err)}
    )
  }
}
