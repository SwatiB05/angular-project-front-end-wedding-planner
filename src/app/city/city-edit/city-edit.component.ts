import { CityService } from './../city.service';
import { Cities } from './../city.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
c:Cities=new Cities()
  constructor(private modal: NgbActiveModal,
    private service:CityService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onUpdate(){
    if (!this.c.city) {
      this.toastr.warning('please enter title')
    } else {
this.service.updateCity(this.c).subscribe(res=>{
  console.log(res)
  this.toastr.success('SuccessFully Updated')
  this.modal.dismiss('ok')
},
error=>{
  this.toastr.error('City Invalid')
})
    }
  }


  onCancel() {
    this.modal.dismiss('cancel')
  }
}
