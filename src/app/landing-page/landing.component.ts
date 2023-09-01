import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing-service/routing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  sidenav:boolean=true;

  constructor(public router: RoutingService){}

  ngOnInit(){}

  toggleSidenav(){
    this.sidenav = !this.sidenav;
  }

  route(page:string){
    this.router.route(page)
  }
  
}
