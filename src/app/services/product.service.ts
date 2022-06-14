import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, Product } from '../shared/models/product.model';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, private _api: ApiService) {}

  getAllProducts(limitOfResults = 9, page: any): Observable<Products> {
    return this.http.get<Products>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString(),
        page: page,
      },
    });
  }

  getProductsByCategory(category: string): Observable<Products> {
    return this.http.get<Products>(this.url + 'products', {
      params: {
        category: category,
      },
    });
  }

  getSingleProduct(id: Number): Observable<any> {
    return this._api.getTypeRequest('products/' + id);
  }
}