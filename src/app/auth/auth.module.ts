import { FormsModule } from '@angular/forms';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LogoutComponent, CustomerAddComponent, SupplierAddComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [AuthService],
})
export class AuthModule {}
