import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:8080/admin/login';
  admin: Admin = new Admin();

  constructor(private http: HttpClient) {}

  adminLogin(email: string, pass: string):Observable<any> {
    this.admin.email = email;
    this.admin.password = pass;
    console.log('in admin');

    return this.http.post<Admin>(this.baseUrl, this.admin, {
      responseType: 'text' as 'json',
    });
  }
}
