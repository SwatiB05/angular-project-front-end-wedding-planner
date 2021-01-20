import { SupplierServices } from './supplierService.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:8080/admin/supplierService';
@Injectable({
  providedIn: 'root',
})
export class SupplierServicesService {
  constructor(private http: HttpClient) {}
  getSupplierServices(): Observable<any> {
    return this.http.get<SupplierServices[]>(baseUrl);
  }
}
