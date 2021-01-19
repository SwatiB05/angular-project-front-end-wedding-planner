import { SupplierServicesService } from './../supplier-services.service';
import { SupplierServices } from './../supplierService.model';

import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-supplier-services-list',
  templateUrl: './supplier-services-list.component.html',
  styleUrls: ['./supplier-services-list.component.css'],
})
export class SupplierServicesListComponent implements OnInit {
  constructor(private service: SupplierServicesService) {}
  supplierServices: SupplierServices[] = [];
  newTable: SupplierServices[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.onPageLoad();
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
}
