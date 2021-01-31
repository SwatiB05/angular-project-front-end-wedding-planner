import { Cities } from 'src/app/city/city.model';
import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierServicesService } from './../supplier-services.service';
import { SupplierServices } from './../supplierService.model';

import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-supplier-services-list',
  templateUrl: './supplier-services-list.component.html',
  styleUrls: ['./supplier-services-list.component.css'],
})
export class SupplierServicesListComponent implements OnInit {
  bill: number;
  supplierServices: SupplierServices[] = [];
  newTable: SupplierServices[] = [];
  totalPrice: number = 0;

  constructor(
    private service: SupplierServicesService,
    private router: Router
  ) {
    this.bill = router.getCurrentNavigation().extras.state.example;

  }

  ngOnInit(): void {
    this.onPageLoad();
    console.log('bill' + this.bill);
  }

  onPageLoad() {
    this.service.getSupplierServices().subscribe(
      (data) => {
        console.log('in load page');
        this.supplierServices = data;
        for (let x of this.supplierServices) {
          console.log(x.charges);
        }
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calculateBill() {
    this.totalPrice = 0;
    for (let x of this.newTable) {
      this.totalPrice = this.totalPrice + x.charges;
    }
  }
  addSupplier(s: SupplierServices) {
    this.newTable.push(s);
    this.calculateBill();
  }

  removesupplier(s: SupplierServices) {
    const index = this.newTable.indexOf(s);
    if (index > -1) {
      this.newTable.splice(index, 1);
    }
    this.calculateBill();
  }

  onProceed() {
    this.bill = this.bill + this.totalPrice;
    this.router.navigate(['home/bookings/details'], {
      state: { example: this.bill },
    });
  }
}
