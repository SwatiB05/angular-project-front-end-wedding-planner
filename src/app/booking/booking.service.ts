import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient ) {}


  url:string="http://localhost:8080/admin"

  getAllBookings():Observable<Bookings[]>{
return this.http.get<Bookings[]>(this.url);
  }

  getBookingDetail(id:number):Observable<Object>
  {
    return this.http.get(`${this.url}/${id}`);
  }
  
}
