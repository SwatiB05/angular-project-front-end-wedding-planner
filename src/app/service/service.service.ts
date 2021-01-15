import { Observable } from 'rxjs';
import { Services } from './service.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl='http://localhost:8080/admin/services'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  service:Services

  getServices(){
    return this.http.get<Services[]>(baseUrl)
  }

  updateService(s:Services):Observable<Object>{
    return this.http.put(`${baseUrl}/${s.serviceId}`,s,{responseType:'text'})
  }

  createService(s:Services){
    return this.http.post(`${baseUrl}/create`,s,{responseType:'text' as 'json'})
  }

  deleteService(id:number):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`,{responseType:'text'})
  }
}
