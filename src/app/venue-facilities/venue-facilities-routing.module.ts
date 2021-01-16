import { VenueFacilitiesEditComponent } from './venue-facilities-edit/venue-facilities-edit.component';
import { VenueFacilitiesAddComponent } from './venue-facilities-add/venue-facilities-add.component';
import { VenueFacilitiesListComponent } from './venue-facilities-list/venue-facilities-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:VenueFacilitiesListComponent},
  {path:'create',component:VenueFacilitiesAddComponent},
  {path:':id',component:VenueFacilitiesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueFacilitiesRoutingModule { }
