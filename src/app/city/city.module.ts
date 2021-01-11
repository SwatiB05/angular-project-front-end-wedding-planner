import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CityService } from './city.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityAddComponent } from './city-add/city-add.component';


@NgModule({
  declarations: [CityListComponent, CityEditComponent, CityAddComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers:[CityService]
})
export class CityModule { }
