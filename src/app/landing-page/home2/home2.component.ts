import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {

  constructor(public router: RoutingService ){}

  changeAuthType(){
    
  }

  route(page:string){
    this.router.route(page)
  }

}
