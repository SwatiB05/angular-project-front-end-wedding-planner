import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'customer/create', component: CustomerAddComponent },
  { path: 'supplier/create', component: SupplierAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
