import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { AppRoutingModule } from '../app-routing.module';
import { SingleProductComponent } from './single-product/single-product.component';



@NgModule({
  declarations: [
    ViewAllProductsComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ViewAllProductsComponent,
  ]
})
export class ProductsModule { }
