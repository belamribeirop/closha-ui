import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  status: State;
  negociationType: NegociationType;
  category: Category;
  image: string;
  tags: string[];
  ownerId: number;
}
export enum NegociationType {
  sale,
  rent,
}
export enum Category {
  shirt,
  pants,
  heels,
}
export enum State {
  new,
  used,
  semiNew,
}
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}
  post(item: Item): Observable<Item> {
    return this.http.post<Item>(`${environment.api}/item`, item);
  }
  put(item: Item): Observable<Item> {
    return this.http.put<Item>(`${environment.api}/item`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.api}/item/${id}`);
  }
  getById(id: number): Observable<Item> {
    return this.http.get<Item>(`${environment.api}/item/${id}`);
  }
  getByOwnerId(ownerId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.api}/item/${ownerId}`);
  }
  get(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.api}/item`);
  }
}
