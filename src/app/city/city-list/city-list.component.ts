import { CityEditComponent } from './../city-edit/city-edit.component';
import { CityAddComponent } from './../city-add/city-add.component';
import { CityService } from './../city.service';
import { Cities } from './../city.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
  cities = [];
  message = '';
  constructor(
    private service: CityService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad() {
    this.service.getCities().subscribe(
      (data) => {
        this.cities = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAdd() {
    const modalRef = this.modalService.open(CityAddComponent);
    modalRef.result.finally(() => {
      this.onPageLoad();
    });
  }

  onEdit(city: Cities) {
    const modalRef = this.modalService.open(CityEditComponent);
    // get the edit comopnent's reference
    const component = modalRef.componentInstance as CityEditComponent;
    // pre-fill the title and description
    component.c = city;
    modalRef.result.finally(() => {
      // reload the categories
      this.onPageLoad();
    });
  }

  onDelete(id) {
    this.service.deleteCity(id).subscribe(
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
