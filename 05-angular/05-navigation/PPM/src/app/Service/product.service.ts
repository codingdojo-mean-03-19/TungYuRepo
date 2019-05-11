import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient ) { }
  private readonly base = '/api/products';
  private readonly baseUrl = '/api/product';

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.base}`);
  }

  // CREATE NEW PRODUCT
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  // SHOW PRODUCT
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  //EDIT PRODUCT
  editProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${product._id}`, product);
  }
  //DELETE AUTHOR
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
