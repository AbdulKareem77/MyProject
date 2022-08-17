import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-new';
  constructor(private _customerserviceservice: CustomerServiceService,private router : Router) { }
  isAuth(){
    return this._customerserviceservice.isAutenticated()
  }

  logout(){
    //localStorage.getItem()
    this._customerserviceservice.RemoveToken()
    //this._customerserviceservice.canAccess()
    this.router.navigate(['login'])
    this.isAuth()
  }
  logedin(){
  }
}
