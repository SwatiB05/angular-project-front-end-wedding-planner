import { VenueService } from './venue.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';


@NgModule({
  declarations: [VenueAddComponent, VenueListComponent, VenueEditComponent],
  imports: [
    CommonModule,
    VenueRoutingModule
  ],
  providers:[VenueService]
})
export class VenueModule { }
