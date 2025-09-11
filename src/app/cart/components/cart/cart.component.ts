import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../cart.service';
import { OrdersService } from '../../../orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    public cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  // Make sure these are public
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getItems();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  placeOrder(): void {
    if (this.cartItems.length === 0) return alert('Cart is empty!');
    const order = this.ordersService.placeOrder(this.cartItems);
    this.cartService.clearCart();
    this.cartItems = [];
    alert(`Order #${order.id} placed successfully!`);
    this.router.navigate(['/orders']);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
