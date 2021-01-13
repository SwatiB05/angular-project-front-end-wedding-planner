import { Customers } from './../customer.model';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customers=[]


  constructor(private service:CustomerService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.onPageLoad()
  }


  onPageLoad(){
    this.service.getCustomers().subscribe(data=>{
        this.customers=data;
        console.log(data)
    },
    error => {
      console.log(error);
    })
      }



  onEdit(c:number){
    this.router.navigate(['home/customers/customers',c])
  }


  updateStatus(id){
    this.service.updateCustomerStatus(id).subscribe(
      response => {
        console.log(response);      
        this.toastr.success(response)
        this.onPageLoad()
      },
      error => {
        console.log(error);
        this.toastr.error('Error While Deleting..')
      })   
  }
}
