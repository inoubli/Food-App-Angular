import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Food } from 'src/app/shared/models';
import { ApiService } from './api.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

   /**
   * Create one food
   * @param data
   */
  create(data: Food, file: File): Observable<any> {
    
    let json = [];
    let category_id = {'category_id':(data.category_id).toString()} ;
    delete data.category_id;
    json.push(data);
    json.push(category_id);
  
    let headers = new HttpHeaders({ 
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTA4OTU1OTUsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJhZG1pbkBwcmVkaWN0LWEuY29tIiwiZXhwIjoxNTkzNDg3NTk1fQ.DZZ7yEUp7jLrkImubc1MQe7VzEY932PbhpXso5gj1_bHJCNVui9E9Wb3HWcNSMPBdgal6kVeqsicA5I2iedqbkkDrsV9XE0uiX29CNwHQ6w3atQNDe9PRBbD2bUVeii5UVGwzDe9QRcdmrsxgr2p9r2Xjx94MB_sEmJOaWZT-XwGwAlsbYKcothpKN6sEcyny1Dr49hGjcw6f8Bbvoa8gtTdmDgH4iwaHcr7TMh3AVbbYrCD9kA1lsxlmv_lRu6XflB7ohuZMhytKge2_YEM8AJx699V44Otesu3radIXGWDjW2TPAHMX0lwe8_GDgD5_k9kOdMNZeaR4czLpvPDQyxKM0k0zUFBe8AXADI1u6Jvu6EZIa8pzLgeuqorh1v1SBb3LUuXkQ3kxNtfN-4LM_FbPRWowvk5FH1aVs0F8zX9FGE5UHb0wYDSsbZre85-I5V_pVBbxEccQ3oF021cxyU9OqC7o0op3HtYxQNdQXcin5-W_uAtVJUw_IPj44tdWznXT7jx5KnUSj-novLHqFdfnYCdj4RYt2FPkVNWduPECgIlN6lAH-L0IZSNKzwlTf36ETw9mIiO1gMtRhi1-IZDNBkq4JV9Csk1_-jJc2f7WJef0b6gTsDRzGICSRKE2X4h4Hl5W-rRmJIUHdYYVE00o6e2gdv8ile1rWhE5JA'
     });

    let options = { headers: headers } 

   if (file != null || file != undefined) {
    var formData: any = new FormData();
    formData.append('file', file, data.image_url);
    formData.append('json', JSON.stringify(json));
    console.log(formData); 
   }
  //  formData.append('json',json);
    //console.log(formData.get('file'));
    for (var pair of formData.entries()) {
      console.log(pair[0]); 
      console.log(pair[1]); 
    }
   return this.apiService.post('food/post', formData, options).pipe(map( (data) => data));
  //  return this.http.post('food/post', formData, options).pipe(map( (data) => data));
   } 
    
    
  
}
