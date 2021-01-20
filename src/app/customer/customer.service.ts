import { Customers } from './customer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/admin/customers';
const custUrl = 'http://localhost:8080/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  customer: Customers = new Customers();
  //admin

  getCustomers() {
    return this.http.get<Customers[]>(baseUrl);
  }

  updateCustomerStatus(c: number) {
    return this.http.put(`${baseUrl}/status/${c}`, c, { responseType: 'text' });
  }

  //customers
  getCustomerDetail(): Observable<Customers> {
    let id = parseInt(sessionStorage.getItem('id'));
    console.log(typeof id);
    console.log(id);
    return this.http.get<Customers>(custUrl + '/' + id);
  }

  updateCustomer(c: Customers): Observable<Object> {
    return this.http.put(`${custUrl}/${c.customerId}`, c, {
      responseType: 'text',
    });
  }

  createCustomer(c: Customers): Observable<Customers> {
    return this.http.post<Customers>(custUrl + '/create', c, {
      responseType: 'text' as 'json',
    });
  }

  customerLogin(email: string, pass: string): Observable<any> {
    this.customer.email = email;
    this.customer.password = pass;

    return this.http.post<Customers>(custUrl + '/login', this.customer, {
      responseType: 'text' as 'json',
    });
  }
}
