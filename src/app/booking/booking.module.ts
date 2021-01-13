import { FormsModule } from '@angular/forms';
import { BookingService } from './booking.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [BookingListComponent, BookingDetailsComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers:[BookingService]
})
export class BookingModule { }
