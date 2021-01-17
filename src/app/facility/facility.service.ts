import { Facility } from './facility.model';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/admin/facilities';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  f: Facility;
  constructor(private http: HttpClient) {}

  getFacilities() {
    return this.http.get<Facility[]>(baseUrl);
  }

  editFacility(f: Facility): Observable<Object> {
    return this.http.put(`${baseUrl}/${f.facilityId}`, f, {
      responseType: 'text',
    });
  }

  deleteFacility(id: number) {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  createFacility(f: Facility) {
    return this.http.post<Facility>(`${baseUrl}/create`, f, {
      responseType: 'text' as 'json',
    });
  }
}
