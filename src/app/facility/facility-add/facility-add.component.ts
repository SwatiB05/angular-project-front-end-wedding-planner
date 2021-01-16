import { FacilityId } from './../facility.model';

import { FacilityService } from './../facility.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css'],
})
export class FacilityAddComponent implements OnInit {
  facility: FacilityId;
  message = '';

  constructor(
    private modal: NgbActiveModal,
    private service: FacilityService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSave() {
    if (!this.facility.facilityName) {
      this.toastr.warning('Please Enter Title');
      // alert('please enter titles')
    } else {
      this.service.createFacility(this.facility).subscribe(
        (response) => {
          this.toastr.success('Facility Added SuccessFully');
          this.modal.dismiss('ok');
        },
        (error) => {
          this.toastr.error('Cannot add Duplicate Facility');
        }
      );
    }
  }

  onCancel() {
    this.modal.dismiss('cancel');
  }
}
