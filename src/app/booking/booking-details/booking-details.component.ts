import { Observable } from 'rxjs';
import { Bookings } from './../booking.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookings:Bookings
  id: number;
  sub:any
  flag:boolean=true
  constructor(private service:BookingService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bookings=new Bookings()
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
   
    this.loadBooking()
  }
loadBooking(){
  
  this.service.getBookingDetail(this.id).subscribe(
    data=>{
      this.bookings=data,
      console.log(data)
    },
    error=>{
      console.log(error)
    }
  )
}


onDelete(id){
  this.service.deleteBooking(id).subscribe(
    response => {
      console.log(response);
      this.toastr.success(response)
      this.flag=false
      this.loadBooking()
    },
    error => {
      console.log(error);
      this.toastr.error('Error While Deleting..')
    })
}
onConfirm(){

}
}
