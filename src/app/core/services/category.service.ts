import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from 'src/app/shared/models/';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apiService: ApiService) {}
  /**
   * Create one category
   *
   * @param data
   */
  create(data: Category): Observable<Category> {
    return this.apiService.post('categories/', data).pipe(map((data) => data));
  }
}
