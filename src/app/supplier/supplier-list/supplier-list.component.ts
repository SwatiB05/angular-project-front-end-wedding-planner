import { SupplierEditComponent } from './../supplier-edit/supplier-edit.component';
import { Suppliers } from './../supplier.model';
import { SupplierService } from './../supplier.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SupplierAddComponent } from '../supplier-add/supplier-add.component';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliers=[]
message=''
  constructor(private service:SupplierService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.onPageLoad()
  }

  onPageLoad(){
this.service.getSuppliers().subscribe(data=>{
    this.suppliers=data;
    console.log(data)
},
error => {
  console.log(error);
})
  }

  onAdd(){
    const modalRef = this.modalService.open(SupplierAddComponent)
    modalRef.result.finally(() => {
      this.onPageLoad()
    })
  }

  onEdit(supplier:Suppliers){
      const modalRef = this.modalService.open(SupplierEditComponent)
      // get the edit comopnent's reference
      const component = modalRef.componentInstance as SupplierEditComponent
      // pre-fill the title and description
      component.c=supplier
      modalRef.result.finally(() => {
        // reload the categories
        this.onPageLoad()
      })
  }

  onDelete(id){
    this.service.deleteSupplier(id).subscribe(
      response => {
        console.log(response);
        this.message = response
        this.toastr.success(this.message)
        this.onPageLoad()
      },
      error => {
        console.log(error);
        this.toastr.error('Error While Deleting..')
      })
  }

}
