import { Cities } from './../../city/city.model';
import { BookingService } from './../booking.service';
import { CustomerService } from './../../customer/customer.service';
import { Customers } from './../../customer/customer.model';
import { Bookings } from './../booking.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  bookings: Bookings;
  flag: boolean = false;
  customer: Customers;
  bill: number;
  constructor(
    private service: CustomerService,
    private router: Router,
    private toastr: ToastrService,
    private bookService: BookingService
  ) {
    this.bill = router.getCurrentNavigation().extras.state.example;
  }

  ngOnInit(): void {
    this.bookings = new Bookings();
    this.customer = new Customers();
    this.loadCustomer();
    if (this.bill != 0) {
      this.flag = true;
    }
  }

  loadCustomer() {
    this.service.getCustomerDetail().subscribe(
      (data) => {
        (this.customer = data), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onConfirm() {
    this.bookings.DateOfBooking = new Date();
    this.bookings.bookingName = this.customer.firstName;
    this.bookings.customerId = this.customer;
    this.bookings.totalAmount = this.bill;

    this.bookService.createBooking(this.bookings).subscribe(
      (response) => {
        this.toastr.success('Your Booking is Confirm');
        //   this.router.navigate(['auth/login']);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error While Booking');
      }
    );
  }
}
