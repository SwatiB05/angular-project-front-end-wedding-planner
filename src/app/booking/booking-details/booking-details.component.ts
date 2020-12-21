import { Observable } from 'rxjs';
import { Bookings } from './../booking.model';
import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookings:Object=''
  constructor(private service:BookingService) { }

  ngOnInit(): void {
  }
loadBookings(id:any){
  this.service.getBookingDetail(id).subscribe(
    data=>{
      this.bookings=data,
      console.log(data)
    },
    error=>{
      console.log(error)
    }
  )
}
}
