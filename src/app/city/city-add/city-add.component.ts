import { CityService } from './../city.service';
import { Cities } from './../city.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {
  city:Cities=new Cities()
  message=''

  constructor(private modal: NgbActiveModal,
    private service:CityService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  
  onSave(){
    if (!this.city.city) {
      this.toastr.warning('Please Enter Title')
    // alert('please enter titles')
    } else {
      this.service.createCity(this.city)
        .subscribe(response => {
          this.toastr.success("City Added SuccessFully")
          this.modal.dismiss('ok')       
        },
        error=>{
this.toastr.error('Cannot add Duplicate City')
        })
    }
  }
  

  onCancel(){
     this.modal.dismiss('cancel')
  }
}