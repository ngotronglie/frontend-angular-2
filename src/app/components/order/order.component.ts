import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface OrderItem {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  orderDate: Date;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: OrderItem[] = [];
  loading: boolean = true;

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.orders = [
        {
          id: 1,
          productName: 'Product 1',
          quantity: 2,
          price: 99.99,
          status: 'completed',
          orderDate: new Date('2024-03-15')
        },
        {
          id: 2,
          productName: 'Product 2',
          quantity: 1,
          price: 149.99,
          status: 'processing',
          orderDate: new Date('2024-03-16')
        },
        {
          id: 3,
          productName: 'Product 3',
          quantity: 3,
          price: 79.99,
          status: 'pending',
          orderDate: new Date('2024-03-17')
        }
      ];
      this.loading = false;
    }, 1000);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'processing':
        return 'status-processing';
      case 'pending':
        return 'status-pending';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }

  getTotalPrice(order: OrderItem): number {
    return order.quantity * order.price;
  }
}
