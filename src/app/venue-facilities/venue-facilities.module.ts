import { VenueFacilitiesService } from './venue-facilities.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueFacilitiesRoutingModule } from './venue-facilities-routing.module';
import { VenueFacilitiesEditComponent } from './venue-facilities-edit/venue-facilities-edit.component';
import { VenueFacilitiesAddComponent } from './venue-facilities-add/venue-facilities-add.component';
import { VenueFacilitiesListComponent } from './venue-facilities-list/venue-facilities-list.component';


@NgModule({
  declarations: [VenueFacilitiesEditComponent, VenueFacilitiesAddComponent, VenueFacilitiesListComponent],
  imports: [
    CommonModule,
    VenueFacilitiesRoutingModule
  ],
  providers:[VenueFacilitiesService]
})
export class VenueFacilitiesModule { }
