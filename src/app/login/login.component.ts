import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogErrorComponent } from '../mat-dialog-error/mat-dialog-error.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  Formdata = { Email: "", password: "" }
  submit = false;

  constructor(private fb: FormBuilder, private _customerserviceservice: CustomerServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login() {

    this.submit = true
    console.log(this.Formdata)
    const FromForm = new FormData() 
    FromForm.append('email',this.Formdata.Email);
    FromForm.append('password',this.Formdata.password)
    //this.Formdata.Email, this.Formdata.password
    this._customerserviceservice.signin(FromForm).subscribe(resp => {
      console.log(resp);
      if (resp) {
        console.log('sucess')
        this._customerserviceservice.storeToken(resp);
        this._customerserviceservice.canAutenticate()
      }
      else {
        this.dialog.open(MatDialogErrorComponent);
        console.log('email not exist please try again')
      }
    })
  }
}

