import { Injectable } from '@angular/core';
import { Product } from './product/product-form/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient) { }

  save( product: Product) : Observable<Product> {
      return this.http.post<Product>('http://localhost:8080/api/product', product);
  }

  update( product: Product) : Observable<any> {
    return this.http.put<Product>(`http://localhost:8080/api/product/${product.id}`, product);
  } 

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/product');
  }

  findById(id: number) : Observable<Product>{
    return this.http.get<any>(`http://localhost:8080/api/product/${id}`);
  }

  delete(product: Product) : Observable<Product>{
    return this.http.delete<any>(`http://localhost:8080/api/product/${product.id}`);
  }
}
