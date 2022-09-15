import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  birthDate: Date;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  autheticate(): Observable<User> {
    return {} as Observable<User>;
  }
}
