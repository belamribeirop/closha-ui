import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  photo: string;
  type: Type;
  state: State;
}
export enum Type {
  sale,
  rent,
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
  constructor() {}
  post(item: Item): Observable<Item> {
    return {} as Observable<Item>;
  }
}
