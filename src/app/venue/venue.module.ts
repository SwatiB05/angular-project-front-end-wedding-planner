
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VenueService } from './venue.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { VenueRoutingModule } from './venue-routing.module';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { VenueBookComponent } from './venue-book/venue-book.component';


@NgModule({
  declarations: [VenueAddComponent, VenueListComponent, VenueEditComponent, VenueBookComponent],
  imports: [
    CommonModule,
    VenueRoutingModule,
    FormsModule,
    RouterModule

  ],
  providers:[VenueService]
})
export class VenueModule { }
