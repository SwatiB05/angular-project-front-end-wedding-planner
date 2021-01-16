import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // {path:'venues',component:VenueListComponent},
  // {path:'venues/create',component:VenueAddComponent},
  // {path:'venues/:id',component:VenueEditComponent},
  // {path:'venues/:id',component:VenueDetailsComponent},

  {path:'',component:VenueListComponent},
  {path:'create',component:VenueAddComponent},
  {path:':id',component:VenueDetailsComponent},
  {path:':id',component:VenueEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
