import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css'],
})
export class VenueDetailsComponent implements OnInit {
  v: Venue;
  //vf: VenueFacility[] = [];

  message = '';

  constructor(private modal: NgbActiveModal, private service: VenueService) {}

  ngOnInit(): void {}

  onPageLoad() {
    this.service.getVenueId(this.v).subscribe(
      (data) => {
        //console.log('in venue details ' + data.cityId);
        this.v = data;

        console.log(
          this.v.venueFacilities[0].charges +
            ' charges ' +
            this.v.venueFacilities[0].facilityId.facilityName
        );
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log('in venue details ');
  }

  onCancel() {
    this.modal.dismiss('cancel');
  }
}
