import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/products/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // show only first 3 products for "featured"
    this.products = this.productService.getProducts().slice(0, 3);
  }
}
