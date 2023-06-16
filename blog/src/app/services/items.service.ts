import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  uri: string = 'http://localhost:8000/api/items'

  constructor(private http: HttpClient) {}

  getUsers() : Observable<Item[]>{
    return this.http.get(this.uri) as Observable<Item[]>
    
  }

  getItem(id: string): Observable<Item> {
    return this.http.get(`${this.uri}/${id}`) as Observable<Item>
  }
  deleteItem(id: string): Observable<any>{
    return this.http.delete(`${this.uri}/${id}`).pipe(delay(300)) 
  }
  addNewItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.uri, item);
  }
  updateItem(id:string, value:{title:string,info:string,image:string}): Observable<any> {
    return this.http.put(`${this.uri}/${id}`, value) as Observable<any>;
  }
  // addNewItem(item: Item): Observable<any> {
  //   return this.http.post<Item>(`${this.uri}`, item);
  // }


  
}
