import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(public router: RoutingService){}

  ngOnInit(){

  }

  changeAuthType(){}

  route(page:string){
    this.router.route(page)
  }


}
