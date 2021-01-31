import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  b: Bookings = new Bookings();
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/admin/bookings';
  custUrl: string = 'http://localhost:8080/customers/bookings';
  getAllBookings(): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(this.url);
  }

  // getBookingDetail(b):Observable<any>
  // {
  //   return this.http.get(`http://localhost:8080/customers/bookings/${b}`);
  //  // return this.http.get('http://localhost:8080/customers/bookings/'+b)
  // }

  createBooking(b: Bookings): Observable<Bookings> {
    return this.http.post<Bookings>(this.custUrl + '/create', b, {
      responseType: 'text' as 'json',
    });
  }

  getBookingDetail(id: number): Observable<Bookings> {
    return this.http.get<Bookings>(this.custUrl + '/' + id);
  }
  deleteBooking(id: number) {
    return this.http.delete(this.custUrl + '/' + id, {
      responseType: 'text',
    });
  }
}
