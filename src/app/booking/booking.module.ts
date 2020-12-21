import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingService } from './booking.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [BookingListComponent, BookingDetailsComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[BookingService]
})
export class BookingModule { }
