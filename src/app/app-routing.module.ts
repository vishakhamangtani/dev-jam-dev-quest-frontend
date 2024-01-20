import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { LoginHeroComponent } from './home/login-hero/login-hero.component';

const routes: Routes = [
  {
    path:"",
    component:HeroComponent
  },
  {
    path:"login",
    component:SignUpComponent
  },
  // {
  //   path:"/register",
  //   component:SignUpComponent
  // },
  // {
  //   path:"login",
  //   component:SignInComponent
  // },
  {
    path:"login",
    component:SignInComponent
  },
  {
    path:"view-all-products",
    component:ViewAllProductsComponent
  },
  {
    path:"login-hero",
    component:LoginHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
