import { FacilityId } from './../facility/facility.model';
import { BookingService } from './../booking/booking.service';
import { Venue } from './../venue/venue.model';
import { VenueService } from './../venue/venue.service';
import { Suppliers } from './../supplier/supplier.model';
import { SupplierService } from './../supplier/supplier.service';
import { CustomerService } from './../customer/customer.service';
import { CityService } from './../city/city.service';

import { Cities } from './../city/city.model';

import { Component, OnInit } from '@angular/core';
import { Customers } from '../customer/customer.model';
import { Bookings } from '../booking/booking.model';
import { ServiceService } from '../service/service.service';
import { Services } from '../service/service.model';
import { FacilityService } from '../facility/facility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
city:Cities[]=[]
numcity:number
custs:Customers[]=[]
numcust:number
sups:Suppliers[]=[]
numsup:number
venn:Venue[]=[]
numven:number
books:Bookings[]=[]
numbook:number
servs:Services[]=[]
numserv:number
facs:FacilityId[]=[]
numfac:number

  constructor(private cities:CityService,
    private cust:CustomerService,
    private supp:SupplierService,
    private ven:VenueService,
    private book:BookingService,
    private serv:ServiceService,
    private fac:FacilityService) { }

  ngOnInit(): void {
    this.loadCity()
    this.loadCust()
    this.loadSup()
    this.loadVenue()
    this.loadBook()
    this.loadService()
    this.loadFacility()
    
  }
  loadCity() {
    this.cities.getCities().subscribe(
      (data) => {
        this.city = data;
        this.numcity=this.city.length
        console.log(this.numcity)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadCust() {
    this.cust.getCustomers().subscribe(
      (data) => {
        this.custs = data;
        this.numcust=this.custs.length
        console.log(this.numcust)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadSup() {
    this.supp.getSuppliers().subscribe(
      (data) => {
        this.sups = data;
        this.numsup=this.sups.length
        console.log(this.numsup)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadVenue() {
    this.ven.getVenues().subscribe(
      (data) => {
        this.venn = data;
        this.numven=this.venn.length
        console.log(this.numven)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadBook() {
    this.book.getAllBookings().subscribe(
      (data) => {
        this.books = data;
        this.numbook=this.books.length
        console.log(this.numbook)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadService() {
    this.serv.getServices().subscribe(
      (data) => {
        this.servs = data;
        this.numserv=this.servs.length
        console.log(this.numserv)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadFacility() {
    this.fac.getFacilities().subscribe(
      (data) => {
        this.facs = data;
        this.numfac=this.facs.length
        console.log(this.numfac)
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
