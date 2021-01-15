import { SupplierService } from './../supplier.service';
import { Suppliers } from './../supplier.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  supplier:Suppliers=new Suppliers()
  message=''

  constructor(private modal: NgbActiveModal,
    private service:SupplierService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  
  onSave(){
    if (!this.supplier.firstName) {
      this.toastr.warning('Please Enter Title')
    // alert('please enter titles')
    } else {
      this.service.createSupplier(this.supplier)
        .subscribe(response => {
          this.toastr.success("Supplier Added SuccessFully")
          this.modal.dismiss('ok')       
        },
        error=>{
this.toastr.error('Cannot add Duplicate Supplier')
        })
    }
  }

  onCancel(){
     this.modal.dismiss('cancel')
  }
}
