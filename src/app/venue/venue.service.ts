import { Venue } from './venue.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/admin/venues';

@Injectable({
  providedIn: 'root',
})
export class VenueService {
  v: Venue;
  constructor(private http: HttpClient) {}

  getVenues(): Observable<any> {
    return this.http.get<Venue[]>(baseUrl);
  }

  getVenueId(v: Venue) {
    return this.http.get<Venue>(`${baseUrl}/${v.venueId}`);
  }

  editVenue(v: Venue): Observable<Object> {
    return this.http.put(`${baseUrl}/${v.venueId}`, v, {
      responseType: 'text' as 'json',
    });
  }

  deleteVenue(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  createVenue(v: Venue) {
    return this.http.post<Venue>(`${baseUrl}/create`, v, {
      responseType: 'text' as 'json',
    });
  }
}
