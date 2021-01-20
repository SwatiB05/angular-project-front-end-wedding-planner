import { ActivatedRoute } from '@angular/router';
import { Cities } from 'src/app/city/city.model';
import { CityService } from 'src/app/city/city.service';
import { Suppliers } from './../supplier.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css'],
})
export class SupplierEditComponent implements OnInit {
  city1: number;
  city: Cities[] = [];
  c: Suppliers = new Suppliers();
  id;
  constructor(
    // private modal: NgbActiveModal,
    private service: SupplierService,
    private toastr: ToastrService,
    private citySer: CityService // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.id = sessionStorage.getItem('id');

    this.loadCity();
    this.loadSupplier();
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
  loadSupplier() {
   
    this.service.getSupplierDetail().subscribe(
      (data) => {
        (this.c = data), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  selectChange() {
    console.log(this.city1);
    this.c.scityId = this.city.find((x) => x.cityId == this.city1);
    console.log(this.c.scityId.city);
  }
  onUpdate() {
    if (!this.c.firstName) {
      this.toastr.warning('please enter title');
    } else {
      this.service.updateSupplier(this.c).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('SuccessFully Updated');
          //  this.modal.dismiss('ok');
        },
        (error) => {
          this.toastr.error('City Invalid');
        }
      );
    }
  }

  // onCancel() {
  //   this.modal.dismiss('cancel');
  // }
}
