import { Observable } from 'rxjs';
import { CityService } from './../../city/city.service';
import { Cities } from './../../city/city.model';
import { Customers } from './../customer.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  customer: Customers;
  id: number;
  city1: number;
  city: Cities[] = [];

  constructor(
    private service: CustomerService,
    private citySer: CityService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.customer = new Customers();

    //this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadCustomer();
    this.loadCity();
  }

  selectChange() {
    console.log(this.city1);
    this.customer.ccityId.cityId = this.city1;
  }

  loadCustomer() {
    this.service.getCustomerDetail().subscribe(
      (data) => {
        (this.customer = data), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
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

  onUpdate(c: Customers) {
    this.service.updateCustomer(c).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('SuccessFully Updated');
        this.loadCustomer();
      },
      (error) => {
        this.toastr.error('Customer Invalid');
      }
    );
  }
}
