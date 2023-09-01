import { Component } from '@angular/core';
import { RoutingService } from '../services/routing-service/routing.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {

  miniView:boolean = false;

  constructor(public router: RoutingService){}

  sidenav:boolean = true;
  isMobile:boolean = true;
  

  toggleSidenav(){
    this.sidenav = !this.sidenav
    this.isMobile = !this.isMobile
  }

  route(page:string){
    this.router.route(page)
  }


  toggleMenu(menu:string){

  }
}
