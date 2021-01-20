import { CustomerService } from './../../customer/customer.service';
import { Customers } from './../../customer/customer.model';
import { Cities } from './../../city/city.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CityService } from './../../city/city.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  customer: Customers;
  city1: number;
  city: Cities[] = [];

  password: string;
  constructor(
    private service: CustomerService,
    private citySer: CityService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.customer = new Customers();
    this.loadCity();
  }
  loadCity() {
    this.citySer.getCities().subscribe(
      (data) => {
        this.city = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectChange() {
    console.log(this.city1);
    this.customer.ccityId = this.city.find((x) => x.cityId == this.city1);
  }

  onSubmit() {
    this.customer.isActive = 1;
    this.customer.status = 1;
    this.customer.DateOfCreation = new Date();
    console.log(this.customer);
    if (!this.customer.firstName) {
      this.toastr.warning('Please Enter First Name');
    } else if (!this.customer.lastName) {
      this.toastr.warning('Please Enter Last Name');
    } else if (!this.customer.phoneNo) {
      this.toastr.warning('Please Enter Mobile No.');
    } else if (this.customer.phoneNo.length != 10) {
      this.toastr.warning('Please Check Mobile No.');
    } else if (!this.customer.customerAddress) {
      this.toastr.warning('Please Enter Address');
    } else if (!this.customer.email) {
      this.toastr.warning('Please Enter Email Id');
    } else if (this.customer.password != this.password) {
      this.toastr.warning('Please Confirm Password');
    } else {
      this.service.createCustomer(this.customer).subscribe(
        (response) => {
          this.toastr.success('Registration Success');
          this.router.navigate(['auth/login']);
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error While Registration');
        }
      );
    }
  }
}
