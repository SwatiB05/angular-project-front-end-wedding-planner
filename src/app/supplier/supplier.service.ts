import { Suppliers } from './supplier.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:8080/admin/suppliers'

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http:HttpClient) { }

  supplier:Suppliers

  getSuppliers(){
    return this.http.get<Suppliers[]>(baseUrl)
  }

updateSupplier(c:Suppliers):Observable<Object>{
  return this.http.put(`${baseUrl}/${c.supplierId}`,c,{responseType: 'text'})
}

createSupplier(c:Suppliers){
  return this.http.post<Suppliers>(`${baseUrl}/create`,c,{ responseType: 'text' as 'json'  })
}

deleteSupplier(id:number){
  return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' })
}
}
