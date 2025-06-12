import { Routes } from '@angular/router';
import {HomeComponent} from './layouts/home/home.component';
import {ShopComponent} from './layouts/shop/shop.component';
import {CartComponent} from './layouts/cart/cart.component';
import {AuthComponent} from './layouts/auth/auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './layouts/admin/admin.component';

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
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'admin/dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
