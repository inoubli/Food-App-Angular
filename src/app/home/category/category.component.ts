import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categoryForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl(),
      legend: new FormControl(),
      meals: new FormControl(),
      description: new FormControl(),
    });
  }
}
