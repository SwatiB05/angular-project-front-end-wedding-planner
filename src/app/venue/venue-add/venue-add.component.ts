import { Venue } from './../venue.model';
import { VenueService } from './../venue.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-venue-add',
  templateUrl: './venue-add.component.html',
  styleUrls: ['./venue-add.component.css']
})
export class VenueAddComponent implements OnInit {

  venue:Venue=new Venue()
  message=''

  constructor(private modal: NgbActiveModal,
    private service:VenueService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  
  onSave(){
    if (!this.venue.venueName) {
      this.toastr.warning('Please Enter Name')
    // alert('please enter titles')
    } else {
      this.service.createVenue(this.venue)
        .subscribe(response => {
          this.toastr.success("Venue Added SuccessFully")
          this.modal.dismiss('ok')       
        },
        error=>{
this.toastr.error('Cannot add Duplicate Venue')
        })
    }
  }
  
  onCancel(){
     this.modal.dismiss('cancel')
  }
}
