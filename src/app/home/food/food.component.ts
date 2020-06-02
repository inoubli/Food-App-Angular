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
  public foodForm: FormGroup;
  public categories: Category[] = [];
  public scores = [1,2,3,4,5,6,7,8,9,10];
  public file : File;

  get name(){
    return this.foodForm.get('name');
  }

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.initCategories();
    this.buildForm();
  }

  /**
   * Initialize categories
   */
  initCategories() {
    this.categories = CATEGORIES;
  }

  public buildForm(){
    this.foodForm = new FormGroup({
      name: new FormControl('', Validators.required),
      legend: new FormControl(),
      selected_score: new FormControl(),
      deselected_score: new FormControl(),
      description: new FormControl(),
      image_url: new FormControl(),
      category_id: new FormControl()
    });
  }

  public onFileSelected(event) {
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
  public submit(){
    this.foodService.create(this.foodForm.value, this.file).subscribe((data) => {
      alert(`Food ${data.name} successfully created`);
      //console.log(this.file);
    });
  }

}
