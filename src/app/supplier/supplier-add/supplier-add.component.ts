import { Router } from '@angular/router';
import { SupplierService } from './../supplier.service';
import { Suppliers } from './../supplier.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Cities } from 'src/app/city/city.model';
import { CityService } from 'src/app/city/city.service';


@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  supplier:Suppliers
  city1:number
  city: Cities[]=[]
  password:string

  constructor(private modal: NgbActiveModal,
    private service:SupplierService,
    private toastr: ToastrService,
    private citySer:CityService,
    private router:Router) { }


  ngOnInit(): void {
    this.supplier=new Suppliers()
    this.loadCity()
  }

  loadCity(){
    this.citySer.getCities().subscribe(
      data=>{
        this.city=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

  selectChange(){
    console.log(this.city1)
   this.supplier.scityId = this.city.find(x => x.cityId == this.city1);
  }
  
  onSave(){
    this.supplier.isActive=1
    this.supplier.isActive=1
    this.supplier.AccountCreationDate=new Date()

    console.log(this.supplier)
    if (!this.supplier.firstName) {
      this.toastr.warning('Please Enter First Name')
    }else if(!this.supplier.lastName){
      this.toastr.warning('Please Enter Last Name')
    }else if(!this.supplier.phoneNo){
      this.toastr.warning('Please Enter Mobile No.')
    }else if(this.supplier.phoneNo.length!=10){
      this.toastr.warning('Please Check Mobile No.')
    }else if(!this.supplier.supplierAddress){
      this.toastr.warning('Please Enter Address')
    }else if(!this.supplier.email){
      this.toastr.warning('Please Enter Email Id')
    }else if(this.supplier.password!=this.password){
      this.toastr.warning('Please Confirm Password')
    }
     else {
      this.service.createSupplier(this.supplier)
        .subscribe(response => {
          this.toastr.success('Registration Success')
          this.router.navigate(['auth/login'])
        },
        error=>{
          console.log(error)
//this.toastr.error('Error While Registration')
        })
    }
  }

  onCancel(){
     this.modal.dismiss('cancel')
  }
}
