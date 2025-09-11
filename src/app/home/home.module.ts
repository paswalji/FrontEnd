import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    FeaturedProductsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
