import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductComponent} from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
