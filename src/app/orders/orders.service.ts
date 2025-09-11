import { Injectable } from '@angular/core';
import { CartItem } from '../cart/cart.service';

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;

  placeOrder(cartItems: CartItem[]): Order {
    const order: Order = {
      id: this.nextId++,
      items: cartItems.map(i => ({ ...i })),
      total: cartItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
      date: new Date()
    };
    this.orders.push(order);
    return order;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order | undefined {
    return this.orders.find(o => o.id === id);
  }
}
