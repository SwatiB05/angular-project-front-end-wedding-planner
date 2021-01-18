import { Suppliers } from './supplier.model';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const baseUrl='http://localhost:8080/admin/suppliers'

const supUrl = 'http://localhost:8080/suppliers/';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  // constructor(private http: HttpClient) {}
  // supplier: Suppliers = new Suppliers();

  // supplierLogin(email: string, pass: string) {
  //   this.supplier.email = email;
  //   this.supplier.password = pass;


  constructor(private http:HttpClient) { }

  supplier:Suppliers

  getSuppliers(){
    return this.http.get<Suppliers[]>(baseUrl)
  }

updateSupplier(c:Suppliers):Observable<Object>{
  return this.http.put(`${baseUrl}/${c.supplierId}`,c,{responseType: 'text'})
}

updateSupplierStatus(s: number) {
  return this.http.put(`${baseUrl}/status/${s}`, s, { responseType: 'text' });
}
createSupplier(c:Suppliers){
  return this.http.post<Suppliers>(`${baseUrl}/create`,c,{ responseType: 'text' as 'json'  })
}

deleteSupplier(id:number){
  return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' })
}

supplierLogin(email: string, pass: string) {
  this.supplier.email = email;
  this.supplier.password = pass;

  return this.http.post<Suppliers>(supUrl + '/login', this.supplier, {
    responseType: 'text' as 'json',
  });
}
   
  }


