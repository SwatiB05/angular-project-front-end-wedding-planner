import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Services } from '../service.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  s:Services=new Services()
  message=''

  constructor(private modal: NgbActiveModal,
    private service:ServiceService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  
  onSave(){
    if (!this.s.serviceName) {
      this.toastr.warning('Please Enter Title')
    // alert('please enter titles')
    } else {
      this.service.createService(this.s)
        .subscribe(response => {
          this.toastr.success("City Added SuccessFully")
          this.modal.dismiss('ok')       
        },
        error=>{
this.toastr.error('Cannot add Duplicate Service')
        })
    }
  }
  

  onCancel(){
     this.modal.dismiss('cancel')
  }

}
