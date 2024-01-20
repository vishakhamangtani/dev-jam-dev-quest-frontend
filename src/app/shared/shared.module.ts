import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginNavbarComponent,
    LoginFooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    LoginNavbarComponent,
    LoginFooterComponent,
  ]
})
export class SharedModule { }
