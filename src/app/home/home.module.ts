import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginHeroComponent } from './login-hero/login-hero.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutUsComponent,
    ClientsSectionComponent,
    LoginHeroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeroComponent,
    AboutUsComponent,
    ClientsSectionComponent,
    LoginHeroComponent
  ]
})
export class HomeModule { }
