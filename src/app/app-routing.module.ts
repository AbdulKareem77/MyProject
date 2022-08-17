import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AddCartComponent } from './add-cart/add-cart.component';
const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    canActivate:[RouteGuardGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[RouteGuardGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'AddCart',
    component:AddCartComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
