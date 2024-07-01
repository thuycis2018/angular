import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductData} from '../productdata';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  productData: ProductData | undefined;
  constructor() {
    const productDataId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getProductDataById(productDataId).then((productData) => {
      this.productData = productData;
    });
  }
}
