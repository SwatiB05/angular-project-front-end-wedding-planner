import { Customers } from './customer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:8080/admin/customers'
const custUrl='http://localhost:8080/customers'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private http:HttpClient) { }

  //admin

  getCustomers(){
    return this.http.get<Customers[]>(baseUrl)
  }

updateCustomerStatus(c:number){
  return this.http.put(`${baseUrl}/status/${c}`,c,{responseType: 'text'})
}

  //customers
  getCustomerDetail(id:number): Observable<Customers> {
    return this.http.get<Customers>(custUrl+'/' + id)
  
  }

updateCustomer(c:Customers):Observable<Object>{
  return this.http.put(`${custUrl}/${c.customerId}`,c,{responseType: 'text'})
}

createCustomer(c:Customers){
  return this.http.post<Customers>(custUrl+'/create',c,{ responseType: 'text' as 'json'  })
}






}
