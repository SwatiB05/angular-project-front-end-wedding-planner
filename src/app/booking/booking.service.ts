import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient ) {}


  url:string="http://localhost:8080/admin/bookings"

  getAllBookings():Observable<Bookings[]>{
return this.http.get<Bookings[]>(this.url);
  }

  // getBookingDetail(b):Observable<any>
  // {
  //   return this.http.get(`http://localhost:8080/customers/bookings/${b}`);
  //  // return this.http.get('http://localhost:8080/customers/bookings/'+b)
  // }
  


  getBookingDetail(id:number): Observable<Bookings> {
    return this.http.get<Bookings>('http://localhost:8080/customers/bookings/' + id)
  
  }
  deleteBooking(id:number){
    return this.http.delete('http://localhost:8080/customers/bookings/' + id, { responseType: 'text' })
  }
}
