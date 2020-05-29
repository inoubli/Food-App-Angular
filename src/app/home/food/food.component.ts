import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService } from 'src/app/core/services';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public foodForm: FormGroup;

  get name(){
    return this.foodForm.get('name');
  }

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.foodForm = new FormGroup({
      name: new FormControl('', Validators.required),
      legend: new FormControl(),
      selectedScore: new FormControl(),
      deselectedScore: new FormControl(),
      description: new FormControl(),
      imageUrl: new FormControl(),
      categoryId: new FormControl()
    });
  }

  /**
   * Save new food
   */
  public submit(){
    this.foodService.create(this.foodForm.value).subscribe((data) => {
      alert(`Food ${data.name} successfully created`);
    });
  }

}
