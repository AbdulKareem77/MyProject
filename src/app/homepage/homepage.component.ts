import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerServiceService } from '../customer-service.service';
import { MatConfrmDialogComponent } from '../mat-confrm-dialog/mat-confrm-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _customerserviceservice: CustomerServiceService,public dialog: MatDialog) { }
  public Products: any[] = []
  ngOnInit(): void {
    this._customerserviceservice.canAccess()
    this._customerserviceservice.getProducts().subscribe((data) => {
      this.Products = data;
      console.log(this.Products)

    });

  }
  AddToCart(productt:any){
    console.log(productt)
    this._customerserviceservice.CartStore(productt)
  }

  openDialog(){
    this.dialog.open(MatConfrmDialogComponent)
  }
}