import { LoginService } from './../../auth/login/login.service';
import { VenueBookComponent } from './../venue-book/venue-book.component';
import { VenueDetailsComponent } from './../venue-details/venue-details.component';
import { VenueEditComponent } from './../venue-edit/venue-edit.component';
import { VenueAddComponent } from './../venue-add/venue-add.component';
import { VenueService } from './../venue.service';
import { Venue } from './../venue.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css'],
})
export class VenueListComponent implements OnInit {
  venues = [];
  message = '';
  constructor(
    private service: VenueService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad() {
    this.service.getVenues().subscribe(
      (data) => {
        this.venues = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onload(venue: Venue) {
    const modalref = this.modalService.open(VenueDetailsComponent);
    const component = modalref.componentInstance as VenueDetailsComponent;
    // pre-fill the title and description
    component.v = venue;
    console.log(component.v);
    modalref.result.finally(() => {
      component.onPageLoad();
    });
  }

  onVenueBook(venue: Venue) {
    const modalref = this.modalService.open(VenueBookComponent);
    const component = modalref.componentInstance as VenueBookComponent;
    // pre-fill the title and description
    component.v = venue;
    console.log(component.v);
    modalref.result.finally(() => {
      component.onBook();
    });
  }

  onAdd() {
    const modalRef = this.modalService.open(VenueAddComponent);
    modalRef.result.finally(() => {
      this.onPageLoad();
    });
  }

  onEdit(venue: Venue) {
    const modalRef = this.modalService.open(VenueEditComponent);
    // get the edit comopnent's reference
    const component = modalRef.componentInstance as VenueEditComponent;
    // pre-fill the title and description
    component.v = venue;
    modalRef.result.finally(() => {
      // reload the categories
      this.onPageLoad();
    });
  }

  onDelete(id) {
    this.service.deleteVenue(id).subscribe(
      (response) => {
        console.log(response);
        this.message = response;
        this.toastr.success(this.message);
        this.onPageLoad();
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error While Deleting..');
      }
    );
  }
}
