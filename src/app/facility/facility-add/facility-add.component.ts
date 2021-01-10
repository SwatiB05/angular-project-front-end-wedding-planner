
import { FacilityService } from './../facility.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

facilityName=''

  constructor(private modal: NgbActiveModal,
    private service:FacilityService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  
  onSave(){
    if (this.facilityName.length==0) {
      this.toastr.warning('please enter title')
    // alert('please enter titles')
    } else {
     
      this.service.createFacility(this.facilityName)
        .subscribe(response => {
          this.modal.dismiss('ok')
        })
    }
  }
  

  onCancel(){
     this.modal.dismiss('cancel')
  }
}
