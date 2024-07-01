import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductData} from '../productdata';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-summary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-summary.component.html',
  styleUrl: './product-summary.component.css'
})
export class ProductSummaryComponent {
  @Input() productData!: ProductData;
}
