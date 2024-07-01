import {Injectable} from '@angular/core';
import {ProductData} from './productdata';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';
  async getAllProductData(): Promise<ProductData[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getProductDataById(id: number): Promise<ProductData | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}