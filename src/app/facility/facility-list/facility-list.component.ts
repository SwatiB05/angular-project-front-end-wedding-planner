import { Observable } from 'rxjs';
import { FacilityEditComponent } from './../facility-edit/facility-edit.component';
import { Facility } from './../facility.model';
import { ToastrService } from 'ngx-toastr';
import { FacilityAddComponent } from './../facility-add/facility-add.component';
import { FacilityService } from './../facility.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css'],
})
export class FacilityListComponent implements OnInit {
  facilities = [];
  message = '';
  constructor(
    private service: FacilityService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad() {
    this.service.getFacilities().subscribe(
      (data) => {
        this.facilities = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAdd() {
    const modalRef = this.modalService.open(FacilityAddComponent);
    modalRef.result.finally(() => {
      this.onPageLoad();
    });
  }

  onEdit(facility: Facility) {
    const modalRef = this.modalService.open(FacilityEditComponent);
    // get the edit comopnent's reference
    const component = modalRef.componentInstance as FacilityEditComponent;
    // pre-fill the title and description
    component.facility = facility;
    modalRef.result.finally(() => {
      // reload the categories
      this.onPageLoad();
    });
  }

  onDelete(id) {
    this.service.deleteFacility(id).subscribe(
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
