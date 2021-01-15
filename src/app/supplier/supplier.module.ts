import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierService } from './supplier.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  declarations: [SupplierAddComponent, SupplierEditComponent, SupplierListComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers:[SupplierService]
})
export class SupplierModule { }
