import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityAddComponent } from './city-add/city-add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'create',component:CityAddComponent},
  {path:':id',component:CityEditComponent},
  {path:'',component:CityListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
