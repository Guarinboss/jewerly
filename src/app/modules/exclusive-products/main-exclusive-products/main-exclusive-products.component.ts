import { Component, OnInit } from '@angular/core';
import { ExclusiiveProductsServiceService } from 'src/app/services/exclusiive-products-service.service';

@Component({
  selector: 'app-main-exclusive-products',
  templateUrl: './main-exclusive-products.component.html',
  styleUrls: ['./main-exclusive-products.component.css']
})
export class MainExclusiveProductsComponent implements OnInit {

  exclusiveProducts:any;
  constructor(private productsService : ExclusiiveProductsServiceService) { 
    this.exclusiveProducts = this.productsService.productDetails;
  }

  ngOnInit(): void {
  }

}
