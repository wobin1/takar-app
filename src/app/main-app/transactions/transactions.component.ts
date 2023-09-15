import { Component } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service/routing.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  constructor(private router: RoutingService){}


}
