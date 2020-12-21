import { FacilityService } from './../facility.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities=[]
  message=''
  constructor(private service:FacilityService,private router:Router, private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.onPageLoad()
  }

onPageLoad(){
this.service.getFacilities().subscribe(
  data=>{
        this.facilities=data;
        console.log(data)
      },
      error => {
        console.log(error);
      })

}
  onEdit(id,name){
    this.service.editFacility(id,name).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['http://localhost:8080/admin/facilities'],{relativeTo:this.route});
        this.message = 'The Facility updated successfully!';
      },
      error => {
        console.log(error);
      })
  }


  onDelete(id){
    this.service.deleteFacility(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['http://localhost:8080/admin/facilities'],{relativeTo:this.route});
        this.message = 'The Facility successfully Deleted!';
      },
      error => {
        console.log(error);
      })
  }

}



