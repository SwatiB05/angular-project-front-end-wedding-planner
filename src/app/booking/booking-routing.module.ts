import { BookingListComponent } from './booking-list/booking-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  { path: '', component: BookingListComponent },
  { path: 'details', component: BookingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
