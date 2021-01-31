import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit, NgModule } from '@angular/core';
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
  totalBill: number = 0;
  message = '';

  constructor(private modal: NgbActiveModal, private service: VenueService) {}

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad() {
    this.service.getVenueId(this.v).subscribe(
      (data) => {
        //console.log('in venue details ' + data.cityId);
        this.v = data;
        var venuefac = this.v.venueFacilities.length;
        console.log('length=' + venuefac);
        for (let i = 0; i < venuefac; i++) {
          console.log('in for' + this.totalBill);
          this.totalBill = this.totalBill + this.v.venueFacilities[i].charges;
          console.log('total=' + this.totalBill);
        }
        console.log(this.v);
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
