import { ServiceService } from './service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';


@NgModule({
  declarations: [ServiceAddComponent, ServiceListComponent, ServiceEditComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  providers:[ServiceService]
})
export class ServiceModule { }
