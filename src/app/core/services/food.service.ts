import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private apiService: ApiService) { }
   /**
   * Create one food
   * @param data
   */
  create(data: Food): Observable<Food> {
    return this.apiService.post('foods/', data).pipe(map( (data) => data));
  }
}
