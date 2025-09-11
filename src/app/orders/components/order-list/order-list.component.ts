import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from '../../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.orders = this.ordersService.getOrders();
  }

  viewOrder(orderId: number) {
    this.router.navigate(['/orders', orderId]);
  }
}
