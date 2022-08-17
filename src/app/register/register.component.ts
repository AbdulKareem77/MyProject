import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  gender : any
  Formdata = {firstName:"",lastName:"", Address:"", Email:"",password:"",Gender:""}

  constructor(private _customerserviceservice: CustomerServiceService,private router : Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.router.navigate(['register'])
    
  }
register(form:any){
  const user = this.Formdata;   
  console.log(form.value)
  console.log(this.Formdata)
  this._customerserviceservice.create(this.Formdata).subscribe(resp => {
    console.log(resp)
    if(resp){
      console.log('sucess')
      this._customerserviceservice.storeToken(resp);
      this._customerserviceservice.canAutenticate()
    }
    else{
      console.log('failure')
    }

   
   // this._customerserviceservice.canAutenticate();
    form.resetForm();
  })
  }
}

function openSnackBar() {
  throw new Error('Function not implemented.');
}

