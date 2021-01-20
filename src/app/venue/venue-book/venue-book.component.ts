import { VenueFacilities } from './../../venue-facilities/venueFacilities.model';
import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-venue-book',
  templateUrl: './venue-book.component.html',
  styleUrls: ['./venue-book.component.css'],
})
export class VenueBookComponent implements OnInit {
  v: Venue;
  //vf: VenueFacilities[] = [];
  totalBill: number = 0;
  message = '';

  constructor(private modal: NgbActiveModal, private service: VenueService) {}

  ngOnInit(): void {
    this.v = new Venue();
  }

  onBook() {
    this.service.getVenueId(this.v).subscribe(
      (data) => {
        //console.log('in venue details ' + data);
        this.v = data;

        var venuefac = this.v.venueFacilities.length;
        console.log('length=' + venuefac);
        for (let i = 0; i < venuefac; i++) {
          console.log('in for' + this.totalBill);
          this.totalBill = this.totalBill + this.v.venueFacilities[i].charges;
          console.log('total' + this.totalBill);
        }

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
