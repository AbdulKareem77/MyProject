import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import{MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';import { RouterTestingModule } from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomepageComponent } from './homepage/homepage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShoppingcartComponent } from './homepage/shoppingcart/shoppingcart.component';
import { FilterlistComponent } from './homepage/shoppingcart/filterlist/filterlist.component';
import { ProductlistComponent } from './homepage/shoppingcart/productlist/productlist.component';
import { CartlistComponent } from './homepage/shoppingcart/cartlist/cartlist.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatConfrmDialogComponent } from './mat-confrm-dialog/mat-confrm-dialog.component';
import { MatDialogErrorComponent } from './mat-dialog-error/mat-dialog-error.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomepageComponent,
    ShoppingcartComponent,
    FilterlistComponent,
    ProductlistComponent,
    CartlistComponent,
    AddCartComponent,
    MatConfrmDialogComponent,
    MatDialogErrorComponent
  ],entryComponents:[MatConfrmDialogComponent],
  imports: [
    BrowserModule,RouterModule,FlexLayoutModule,MatTableModule,MatDialogModule,MatProgressSpinnerModule,
    AppRoutingModule,FormsModule,MatSnackBarModule,
    BrowserAnimationsModule,MatNativeDateModule,MatCardModule,HttpClientModule,MatDatepickerModule,MatDatepickerModule,MatDatepickerModule,MatCheckboxModule, MatFormFieldModule,MatRadioModule,MatListModule,MatButtonModule,MatInputModule,MatToolbarModule,ReactiveFormsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
