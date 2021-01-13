import { BookingListComponent } from './booking-list/booking-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  {path:'bookings',component:BookingListComponent},
  {path:'bookings/:id',component:BookingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
