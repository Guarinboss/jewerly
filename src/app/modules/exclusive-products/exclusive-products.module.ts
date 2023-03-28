import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainExclusiveProductsComponent } from './main-exclusive-products/main-exclusive-products.component';
import { NewColectionProductsComponent } from './new-colection-products/new-colection-products.component';



@NgModule({
  declarations: [
    MainExclusiveProductsComponent,
    NewColectionProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainExclusiveProductsComponent,
    NewColectionProductsComponent
  ]
})
export class ExclusiveProductsModule { }
