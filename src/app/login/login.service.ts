import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  autheticate(credentials: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/authenticate`, credentials);
  }
}
