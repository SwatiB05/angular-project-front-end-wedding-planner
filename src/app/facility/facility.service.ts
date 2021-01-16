
import { FacilityId } from './facility.model';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/admin/facilities';


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
f:FacilityId
  constructor(private http:HttpClient) { }

  getFacilities() {
    
    return this.http.get<FacilityId[]>(baseUrl)
    }

  editFacility(f:FacilityId):Observable<Object>{
    return this.http.put(`${baseUrl}/${f.facilityId}`,f,{responseType: 'text'});
   
      }
      


  deleteFacility(id:number){

    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' })
  }


  createFacility(f:FacilityId){
    return this.http.post<FacilityId>(`${baseUrl}/create`,f,{ responseType: 'text' as 'json'  })
  }
}
