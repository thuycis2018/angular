import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductSummaryComponent} from '../product-summary/product-summary.component';
import {ProductData} from '../productdata';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductSummaryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productDataList: ProductData[] = [];
  productService: ProductService = inject(ProductService);
  filteredProductList: ProductData[] = [];
  constructor() {
    this.productService.getAllProductData().then((productDataList: ProductData[]) => {
      this.productDataList = productDataList;
      this.filteredProductList = productDataList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productDataList;
      return;
    }
    this.filteredProductList = this.productDataList.filter((productData) =>
      productData?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
