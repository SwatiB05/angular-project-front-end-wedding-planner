import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierServicesService } from './supplier-services.service';
import { SupplierServicesRoutingModule } from './supplier-services-routing.module';
import { SupplierServicesListComponent } from './supplier-services-list/supplier-services-list.component';
import { SupplierServicesEditComponent } from './supplier-services-edit/supplier-services-edit.component';
import { SupplierServicesAddComponent } from './supplier-services-add/supplier-services-add.component';

@NgModule({
  declarations: [
    SupplierServicesListComponent,
    SupplierServicesEditComponent,
    SupplierServicesAddComponent,
  ],
  imports: [CommonModule, SupplierServicesRoutingModule, FormsModule],
  providers: [SupplierServicesService],
})
export class SupplierServicesModule {}
