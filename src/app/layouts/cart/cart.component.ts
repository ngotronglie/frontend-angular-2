import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

  constructor() {}

  ngOnInit() {
    this.loadCartItems();
    this.calculateTotals();
  }

  loadCartItems() {
    this.cartItems = [
      {
        id: 1,
        name: 'Product 1',
        price: 99.99,
        quantity: 1,
        image: 'img/product/1.jpg'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 149.99,
        quantity: 2,
        image: 'img/product/2.jpg'
      }
    ];
  }

  calculateTotals() {
    this.subtotal = this.cartItems.reduce((sum, item) =>
      sum + (item.price * item.quantity), 0);

    // Example shipping calculation
    this.shipping = this.subtotal > 100 ? 0 : 10;

    this.total = this.subtotal + this.shipping;
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.calculateTotals();
    this.saveCart();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotals();
      this.saveCart();
    }
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.calculateTotals();
    this.saveCart();
  }

  saveCart() {
    // Save cart to localStorage or service
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  proceedToCheckout() {
    // Implement checkout logic
    console.log('Proceeding to checkout...');
    // Navigate to checkout page or show checkout form
  }
}
