import { Injectable } from '@angular/core';
import { Purchase } from './purchase/purchase-form/purchase';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor( private http : HttpClient) { }

  save( purchase: Purchase) : Observable<Purchase> {
      return this.http.post<Purchase>('http://localhost:8080/api/purchase', purchase);
  }

  update( purchase: Purchase) : Observable<any> {
    return this.http.put<Purchase>(`http://localhost:8080/api/purchase/${purchase.id}`, purchase);
  } 

  getPurchases() : Observable<Purchase[]> {
    return this.http.get<Purchase[]>('http://localhost:8080/api/purchase');
  }

  findById(id: number) : Observable<Purchase>{
    return this.http.get<any>(`http://localhost:8080/api/purchase/${id}`);
  }

  delete(purchase: Purchase) : Observable<Purchase>{
    return this.http.delete<any>(`http://localhost:8080/api/purchase/${purchase.id}`);
  }
}
