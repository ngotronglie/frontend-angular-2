import { Routes } from '@angular/router';
import {HomeComponent} from './layouts/home/home.component';
import {ShopComponent} from './layouts/shop/shop.component';
import {CartComponent} from './layouts/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
