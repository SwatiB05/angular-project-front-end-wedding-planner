
import { Component, OnInit } from '@angular/core';
import { Facilities } from '../facility.model';
import { FacilityService } from './../facility.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facility:Facilities
  constructor(private modal: NgbActiveModal,
    private service:FacilityService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  
  onUpdate(){
    if (this.facility.facilityName.length==0) {
      this.toastr.warning('please enter title')
    } else {
this.service.editFacility(this.facility.facilityId,this.facility.facilityName).subscribe(res=>{
  this.modal.dismiss('ok')
})
    }
  }


  onCancel() {
    this.modal.dismiss('cancel')
  }
}
