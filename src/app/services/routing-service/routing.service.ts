import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(public router: Router) { }


  // this function does the routing all over the application.
  route(page:string){
    if(page==''){
      this.router.navigateByUrl('')
    }
    if(page=='about'){
      this.router.navigateByUrl('about')
    }
    if(page=='products'){
      this.router.navigateByUrl('products')
    }
    if(page=='signin'){
      this.router.navigateByUrl('')
      console.log('')
    }
    if(page=='register'){
      this.router.navigateByUrl('registration')
    }
    if(page=='forget-password'){
      this.router.navigateByUrl('forget-password')
    }
    if(page=='reset-password'){
      this.router.navigateByUrl('reset-password')
    }

    if(page=='dashboard'){
      this.router.navigateByUrl('app/dashboard')
    }
    if(page=='alawi'){
      this.router.navigateByUrl('app/alawance')
    }
    if(page=='savings'){
      this.router.navigateByUrl('app/savings')
    }
    if(page=='transaction'){
      this.router.navigateByUrl('app/transactions')
    }
    if(page=='forget-password-verificaton'){
      this.router.navigateByUrl('forget-password-verificaton')
    }
    
    
    

  }
}
