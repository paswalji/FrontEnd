import { Injectable } from '@angular/core';
import { Product } from '../products/product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {}

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product): void {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
    }
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }
}
