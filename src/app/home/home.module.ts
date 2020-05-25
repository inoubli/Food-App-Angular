import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FoodComponent } from './food/food.component';
import { CategoryComponent } from './category/category.component';
import { MealComponent } from './meal/meal.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    FoodComponent,
    CategoryComponent,
    MealComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
