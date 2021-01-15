import { Suppliers } from './../../supplier/supplier.model';
import { SupplierService } from './../../supplier/supplier.service';
import { Login } from './login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customers } from 'src/app/customer/customer.model';
import { Admin } from 'src/app/admin/admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  user: object = [
    { id: 1, user: 'Admin' },
    { id: 2, user: 'Customer' },
    { id: 3, user: 'Supplier' },
  ];
  selected: number;
  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router,
    private cusService: CustomerService,
    private supService: SupplierService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    if (this.selected == 1) {
      this.adminService.adminLogin(this.email, this.pass).subscribe(
        (res) => {
          this.router.navigate(['home/customers', { data: res }]);
          this.toastr.success('Welcome Back');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Please Check Credentials');
        }
      );
    } else if (this.selected == 2) {
      this.cusService.customerLogin(this.email, this.pass).subscribe(
        (res) => {
          this.router.navigate(['home/customers/', { data: res }]);
          this.toastr.success('Welcome Back');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Please Check Credentials');
        }
      );
    } else {
      this.supService.supplierLogin(this.email, this.pass).subscribe(
        (res) => {
          this.router.navigate(['home/customers/', { data: res }]);
          this.toastr.success('Welcome Back');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Please Check Credentials');
        }
      );
    }
  }
}
