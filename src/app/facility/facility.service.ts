import { browser } from 'protractor';
import { Facilities } from './facility.model';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/admin/facilities';


@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http:HttpClient) { }

  getFacilities() {
    
    return this.http.get<Facilities[]>(baseUrl)
    }

  editFacility(id:number,title:string):Observable<Object>{
return this.http.put(`${baseUrl}/${id}`, title);
  }
  deleteFacility(id:number):Observable<any>{
return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' })
  }


  createFacility(title:string){
    return this.http.post<Facilities>(baseUrl,title)
  }
}
