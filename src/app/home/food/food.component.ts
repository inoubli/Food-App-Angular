import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService } from 'src/app/core/services';
import { Category } from 'src/app/shared/models';
import { CATEGORIES } from 'src/app/core/mocks/mock-categories';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodForm: FormGroup;

  name: FormControl;
  legend: FormControl;
  selected_score: FormControl;
  deselected_score: FormControl;
  description: FormControl;
  image_url: FormControl;
  category_id: FormControl;

  categories: Category[] = [];
  scores = [1,2,3,4,5,6,7,8,9,10];
  file : File;

  // get name(){
  //   return this.foodForm.get('name');
  // }

  // get description(){
  //   return this.foodForm.get('description');
  // }

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.initCategories();
    this.createFormControls();
    this.createForm();
  }

  /**
   * Initialize categories
   */
  initCategories() {
    this.categories = CATEGORIES;
  }

  createFormControls(){
      this.name = new FormControl('', [Validators.required,Validators.minLength(3)]);
      this.legend = new FormControl('',[Validators.minLength(3)]);
      this.selected_score = new FormControl('',Validators.required);
      this.deselected_score = new FormControl('',Validators.required);
      this.description = new FormControl('',[Validators.required,Validators.minLength(5)]);
      this.image_url = new FormControl('',Validators.required);
      this.category_id = new FormControl('',Validators.required);
  }

  createForm() {
    this.foodForm = new FormGroup({
      name: this.name,
      legend: this.legend,
      selected_score: this.selected_score,
      deselected_score: this.deselected_score,
      description: this.description,
      image_url: this.image_url,
      category_id: this.category_id      
    });
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
        this.foodForm.patchValue({
          image_url: event.target.files[0].name
        });
        this.file = event.target.files[0];
     }
   }

  /**
   * Save new food
   */
  submit(){
    this.foodService.create(this.foodForm.value, this.file).subscribe((data) => {
      alert(`Food ${data.name} successfully created`);
      //console.log(this.file);
    });
  }

}
