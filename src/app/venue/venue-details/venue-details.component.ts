import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css']
})
export class VenueDetailsComponent implements OnInit {

  v:Venue;
  
  message=''

  constructor(private modal: NgbModal,
    private service:VenueService,
    ) { }
    
  ngOnInit(): void {
    console.log(this.v + " venue details")
  }

  onPageLoad(){
    this.service.getVenueId(this.v).subscribe(data=>{
        this.v=data;
        console.log(data + " in data")
    },
    error => {
      console.log(error);
    })
    
    


}
}

