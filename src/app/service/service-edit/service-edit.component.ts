import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Services } from '../service.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  s:Services=new Services()
  constructor(private modal: NgbActiveModal,
    private service:ServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    if (!this.s.serviceName) {
      this.toastr.warning('please enter title')
    } else {
this.service.updateService(this.s).subscribe(res=>{
  console.log(res)
  this.toastr.success('SuccessFully Updated')
  this.modal.dismiss('ok')
},
error=>{
  this.toastr.error(' Invalid Service')
})
    }
  }


  onCancel() {
    this.modal.dismiss('cancel')
  }

}
