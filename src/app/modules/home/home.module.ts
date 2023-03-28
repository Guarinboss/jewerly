import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ExclusiveProductsModule } from '../exclusive-products/exclusive-products.module';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExclusiveProductsModule
  ]
})
export class HomeModule { }
