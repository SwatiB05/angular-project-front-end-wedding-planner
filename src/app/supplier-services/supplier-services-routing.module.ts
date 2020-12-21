import { SupplierServicesEditComponent } from './supplier-services-edit/supplier-services-edit.component';
import { SupplierServicesAddComponent } from './supplier-services-add/supplier-services-add.component';
import { SupplierServicesListComponent } from './supplier-services-list/supplier-services-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'supplierService',component:SupplierServicesListComponent},
  {path:'supplierService/create',component:SupplierServicesAddComponent},
  {path:'supplierService/:id',component:SupplierServicesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierServicesRoutingModule { }
