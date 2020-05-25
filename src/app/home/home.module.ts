import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodComponent } from './food/food.component';
import { CategoryComponent } from './category/category.component';
import { MealComponent } from './meal/meal.component';



@NgModule({
  declarations: [HomeComponent, FoodComponent, CategoryComponent, MealComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
