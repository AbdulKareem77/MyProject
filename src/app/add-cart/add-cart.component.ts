import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerServiceService } from '../customer-service.service';
import { MatConfrmDialogComponent } from '../mat-confrm-dialog/mat-confrm-dialog.component';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {

  constructor(private _customerserviceservice: CustomerServiceService,public dialog: MatDialog) { }
  CartProduct:any
  ngOnInit(): void {
    this.CartProduct=this._customerserviceservice.GetStore()
    console.log(this.CartProduct)
    //this._customerserviceservice.GrandTotal()
    this.grandtotal()

  }
  remove(Product:any){
    //var res=this.dialog.open(MatConfrmDialogComponent)

    console.log(Product)
    this.grandTotal -= parseInt(Product.productprice)
     this._customerserviceservice.removeItem(Product)
    //console.log(this._customerserviceservice.GrandTotal())

  }
grandTotal:any=0;
grandtotal(){
  
  this.CartProduct.map((a:any)=>{
    this.grandTotal += parseInt(a.productprice)
  })
  console.log(this.grandTotal)
}


openDialog(){
  let dialogres=this.dialog.open(MatConfrmDialogComponent)
  console.log(dialogres)
  dialogres.afterClosed().subscribe((result)=>{
    console.log(result)
  })
}

}


