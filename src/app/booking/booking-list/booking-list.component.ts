import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
bookings=[]
  constructor(private service:BookingService) { }

  ngOnInit(): void {
    this.loadBookings()
  }
  loadBookings(){
    this.service.getAllBookings().subscribe(
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
