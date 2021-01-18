import { Facility } from './../facility.model';
import { Component, OnInit } from '@angular/core';
import { FacilityService } from './../facility.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css'],
})
export class FacilityEditComponent implements OnInit {
  facility: Facility;
  constructor(
    private modal: NgbActiveModal,
    private service: FacilityService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onUpdate() {
    if (this.facility.facilityName.length == 0) {
      this.toastr.warning('please enter title');
    } else {
      this.service.editFacility(this.facility).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('SuccessFully Updated');
          this.modal.dismiss('ok');
        },
        (error) => {
          this.toastr.error('Facility Invalid');
        }
      );
    }
  }

  onCancel() {
    this.modal.dismiss('cancel');
  }
}
