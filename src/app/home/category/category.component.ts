import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Meal } from 'src/app/shared/models';
import { MEALS } from 'src/app/core/mocks';
import { CategoryService } from 'src/app/core/services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categoryForm: FormGroup;
  public meals: Meal[] = [];

  get name() {
    return this.categoryForm.get('name');
  }

  constructor(private categroyService: CategoryService) {}

  ngOnInit(): void {
    this.initMeal();
    this.buildForm();
  }
  /**
   * Initialize meals
   */
  public initMeal() {
    this.meals = MEALS;
  }
  /**
   * Build category form
   */
  public buildForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      legend: new FormControl(),
      meals: new FormControl(),
      description: new FormControl(),
    });
  }
  /**
   * Save new category
   */
  public submit() {
    this.categroyService.create(this.categoryForm.value).subscribe((data) => {
      alert(`Category ${data.name} created successfully`);
    });
  }
}
