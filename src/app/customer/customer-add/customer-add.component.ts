import { Cities, City } from './../../city/city.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CityService } from './../../city/city.service';
import { Customers } from './../customer.model';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customer:Customers=new Customers()
  city1:Cities=new Cities()
  city: Cities[]
password:string
  constructor(private service:CustomerService,
    private citySer:CityService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  
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
    console.log('city: '+this.city1)
    this.customer.ccityId=this.city1
  }

  // constructor(public customerId:number,public firstName:string,public customerAddress:string, public phoneNo:string,public email:string,public password:string,public status:number,public isActive:number,public ccityId:Cities){}
  onSubmit(){
    this.customer.isActive=1
    this.customer.status=1
    this.customer.DateOfCreation=new Date()

    console.log(this.customer)
    if (!this.customer.firstName) {
      this.toastr.warning('Please Enter First Name')
    }else if(!this.customer.lastName){
      this.toastr.warning('Please Enter Last Name')
    }else if(!this.customer.phoneNo){
      this.toastr.warning('Please Enter Mobile No.')
    }else if(this.customer.phoneNo.length!=10){
      this.toastr.warning('Please Check Mobile No.')
    }else if(!this.customer.customerAddress){
      this.toastr.warning('Please Enter Address')
    }else if(!this.customer.email){
      this.toastr.warning('Please Enter Email Id')
    }else if(this.customer.password!=this.password){
      this.toastr.warning('Please Confirm Password')
    }
     else {
      this.service.createCustomer(this.customer)
        .subscribe(response => {
          this.toastr.success("Customer Added SuccessFully")
        },
        error=>{
          console.log(error)
//this.toastr.error('Error While Registration')
        })
    }
  }
}
