import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  bookings = [];
  id: number;
  constructor(private service: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.loadBookings();
  }
  loadBookings() {
    this.service.getAllBookings().subscribe(
      (data) => {
        (this.bookings = data), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // onEdit(b:number){
  // this.router.navigate(['home/bookings',b])
  // }
}
