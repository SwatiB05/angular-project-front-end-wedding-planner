import { CustomerService } from './customer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerEditComponent],
  imports: [CommonModule, CustomerRoutingModule, RouterModule, FormsModule],
  providers: [CustomerService],
})
export class CustomerModule {}
