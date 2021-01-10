
import { Component, OnInit } from '@angular/core';
import { Facilities } from '../facility.model';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facility:Facilities
  constructor() { }

  ngOnInit(): void {
  }

}
