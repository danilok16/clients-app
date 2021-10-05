import { Injectable } from '@angular/core';
import { Client } from './clients/clients-form/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http : HttpClient) { }

  save( client: Client) : Observable<Client> {
      return this.http.post<Client>('http://localhost:8080/api/customer', client);
  }

  update( client: Client) : Observable<any> {
    return this.http.put<Client>(`http://localhost:8080/api/customer/${client.id}`, client);
  } 

  getClients() : Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/api/customer');
  }

  findById(id: number) : Observable<Client>{
    return this.http.get<any>(`http://localhost:8080/api/customer/${id}`);
  }

  delete(client: Client) : Observable<Client>{
    return this.http.delete<any>(`http://localhost:8080/api/customer/${client.id}`);
  }
}
