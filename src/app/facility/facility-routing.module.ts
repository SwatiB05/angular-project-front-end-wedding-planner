import { FacilityAddComponent } from './facility-add/facility-add.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:FacilityListComponent},
  {path:':id',component:FacilityEditComponent},
  {path:'create',component:FacilityAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
