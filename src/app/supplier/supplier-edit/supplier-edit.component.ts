import { Suppliers } from './../supplier.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../supplier.service';


@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  c:Suppliers=new Suppliers()
  constructor(private modal: NgbActiveModal,
    private service:SupplierService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    if (!this.c.firstName) {
      this.toastr.warning('please enter title')
    } else {
this.service.updateSupplier(this.c).subscribe(res=>{
  console.log(res)
  this.toastr.success('SuccessFully Updated')
  this.modal.dismiss('ok')
},
error=>{
  this.toastr.error('City Invalid')
})
    }
  }

  onCancel() {
    this.modal.dismiss('cancel')
  }

}
