import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VenueService } from './venue.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';


@NgModule({
  declarations: [VenueAddComponent, VenueListComponent, VenueEditComponent, VenueDetailsComponent],
  imports: [
    CommonModule,
    VenueRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers:[VenueService]
})
export class VenueModule { }
