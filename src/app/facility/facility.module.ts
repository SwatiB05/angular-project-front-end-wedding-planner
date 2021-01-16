import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityAddComponent } from './facility-add/facility-add.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';


@NgModule({
  declarations: [FacilityListComponent, FacilityAddComponent, FacilityEditComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    RouterModule,
    FormsModule

  ],
  exports:[
    FacilityListComponent, FacilityAddComponent, FacilityEditComponent
  ]
})
export class FacilityModule { }
