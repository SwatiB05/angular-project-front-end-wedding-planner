import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { SupplierServicesEditComponent } from './../supplier-services/supplier-services-edit/supplier-services-edit.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:ServiceListComponent},
  {path:':id',component:ServiceEditComponent},
  {path:'create',component:ServiceAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
