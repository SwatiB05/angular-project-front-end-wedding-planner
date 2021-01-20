import { VenueService } from './../venue.service';
import { Venue } from './../venue.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { NgModule } from '@angular/core';
@Component({
  selector: 'app-venue-edit',
  templateUrl: './venue-edit.component.html',
  styleUrls: ['./venue-edit.component.css'],
})
export class VenueEditComponent implements OnInit {
  v: Venue;
  constructor(
    private modal: NgbActiveModal,
    private service: VenueService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onUpdate() {
    if (this.v.venueName.length == 0) {
      this.toastr.warning('please enter title');
    } else {
      this.service.editVenue(this.v).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('SuccessFully Updated');
          this.modal.dismiss('ok');
        },
        (error) => {
          this.toastr.error('Invalid Venue');
        }
      );
    }
  }

  onCancel() {
    this.modal.dismiss('cancel');
  }
}
