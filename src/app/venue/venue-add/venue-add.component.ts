import { Cities } from './../../city/city.model';
import { CityService } from './../../city/city.service';
import { VenueFacilities } from './../../venue-facilities/venueFacilities.model';
import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-venue-add',
  templateUrl: './venue-add.component.html',
  styleUrls: ['./venue-add.component.css'],
})
export class VenueAddComponent implements OnInit {
  venue: Venue;
  venuefacility1: number;
  venuefacility: VenueFacilities[] = [];
  message = '';
  city1: number;
  city: Cities[] = [];
  constructor(
    private modal: NgbActiveModal,
    private service: VenueService,
    private toastr: ToastrService,
    private citySer: CityService
  ) {}

  ngOnInit(): void {
    this.loadCity();
    this.venue = new Venue();
  }

  loadCity() {
    this.citySer.getCities().subscribe(
      (data) => {
        this.city = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectChange() {
    console.log(this.city1);
    this.venue.vcityId = this.city.find((x) => x.cityId == this.city1);
  }

  onSave() {
    this.venue.description = 'Good Venue';
    this.venue.image = 'venue1.jpg';
    this.venue.venueFacilities = [];

    console.log(this.venue);

    if (!this.venue.venueName) {
      this.toastr.warning('Please Enter Name');
      // alert('please enter titles')
    } else {
      this.service.createVenue(this.venue).subscribe(
        (response) => {
          this.toastr.success('Venue Added SuccessFully');
          this.modal.dismiss('ok');
        },
        (error) => {
          this.toastr.error('Cannot add Duplicate Venue');
        }
      );
    }
  }

  onCancel() {
    this.modal.dismiss('cancel');
  }
}
