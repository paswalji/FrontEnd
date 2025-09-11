import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    { name: 'Electronics', image: 'assets/electronics.jpg' },
    { name: 'Fashion', image: 'assets/fashion.jpg' },
    { name: 'Home & Kitchen', image: 'assets/home.jpg' },
    { name: 'Sports', image: 'assets/sports.jpg' }
  ];
}
