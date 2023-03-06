import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from './model/product-interface';
import { IRegister } from './register-interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  create(data :IRegister )
  {
    return this.http.post<{IdToken : string }>('https://localhost:44349/CustomeRegister/AddCustomer',data)
  }
  //Email:string,password:string   {Email,password}
  signin(FromForm:any  )
  {
    return this.http.post<{IdToken :string}>('https://localhost:44349/CustomeRegister/LoginCustomer',FromForm)
  }
  getProducts(): Observable<ProductInterface[]>
  {
    return this.http.get<ProductInterface[]>('https://localhost:44349/CustomeRegister/Getproductsdata');
  }


  isAutenticated():boolean{

    if(localStorage.getItem('token')!==null)
    {
    
     return true;

    }
    return false;
  }

  storeToken(Token:any){
    localStorage.setItem('token',Token)

  }
  RemoveToken(){
    localStorage.removeItem('token')
  }

  isLoggedIn(): boolean {
    return true;
  }

  canAutenticate(){
    this.router.navigate(['/homepage'])
  }


  canAccess(){
    if(!this.isAutenticated())
    {

      this.router.navigate(['login'])
    }
  }

  public StoreProduct: any[] = []
  CartStore(Product:any){
    //console.log(Product)
    this.StoreProduct.push(Product)
  }

  GetStore(){
    console.log(this.StoreProduct)
    return this.StoreProduct

  }

  removeItem(Item:any){
    var index=this.StoreProduct.indexOf(Item)
    this.StoreProduct.splice(index,1)
   // console.log(Item)
  }

  GrandTotal(){
    let grandtotal=0;
    this.StoreProduct.map((a:any)=>{
      grandtotal += parseInt(a.productprice)

    })
   // console.log(grandtotal)
    return grandtotal
    
  }
  
  constructor(private http: HttpClient,private router : Router) { }
}
