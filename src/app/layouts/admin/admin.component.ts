import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isSidebarOpen = true;
  menuItems = [
    { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/products', icon: 'inventory', label: 'Products' },
    { path: '/admin/orders', icon: 'shopping_cart', label: 'Orders' },
    { path: '/admin/users', icon: 'people', label: 'Users' },
    { path: '/admin/settings', icon: 'settings', label: 'Settings' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
