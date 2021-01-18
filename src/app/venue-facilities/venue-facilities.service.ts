import { VenueFacilities } from './venueFacilities.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/admin/venueFacilities';

@Injectable({
  providedIn: 'root',
})
export class VenueFacilitiesService {
  constructor(private http: HttpClient) {}

  getVenueFacilities(): Observable<any> {
    return this.http.get<VenueFacilities[]>(baseUrl);
  }
}
