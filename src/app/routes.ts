import {Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
const routeConfig: Routes = [
  {
    path: '',
    component: ProductComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent,
    title: 'Product details',
  },
];
export default routeConfig;