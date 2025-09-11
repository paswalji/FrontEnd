import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000, description: 'Powerful laptop for work & gaming', image: 'assets/laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 20000, description: 'Latest smartphone with best camera', image: 'assets/phone.jpg' },
    { id: 3, name: 'Headphones', price: 2000, description: 'Noise-cancelling wireless headphones', image: 'assets/headphones.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
