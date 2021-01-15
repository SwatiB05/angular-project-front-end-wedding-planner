import { HttpClient } from '@angular/common/http';
import { Suppliers } from './supplier.model';
import { Injectable } from '@angular/core';

const supUrl = 'http://localhost:8080/suppliers/';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private http: HttpClient) {}
  supplier: Suppliers = new Suppliers();

  supplierLogin(email: string, pass: string) {
    this.supplier.email = email;
    this.supplier.password = pass;

    return this.http.post<Suppliers>(supUrl + '/login', this.supplier, {
      responseType: 'text' as 'json',
    });
  }
}
