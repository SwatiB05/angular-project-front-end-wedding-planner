import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServiceAddComponent } from '../service-add/service-add.component';
import { ServiceEditComponent } from '../service-edit/service-edit.component';
import {Services}from './../service.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services=[]
  message=''
  constructor(private service:ServiceService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.onPageLoad()
  }

  onPageLoad(){
    this.service.getServices().subscribe(data=>{
        this.services=data;
        console.log(data)
    },
    error => {
      console.log(error);
    })
      }
    
    
      onAdd(){
        const modalRef = this.modalService.open(ServiceAddComponent)
        modalRef.result.finally(() => {
          this.onPageLoad()
        })
      }
    
    
      onEdit(service:Services){
          const modalRef = this.modalService.open(ServiceEditComponent)
          // get the edit comopnent's reference
          const component = modalRef.componentInstance as ServiceEditComponent
          // pre-fill the title and description
          component.s=service
          modalRef.result.finally(() => {
            // reload the categories
            this.onPageLoad()
          })
      }
    
      onDelete(id){
        this.service.deleteService(id).subscribe(
          response => {
            console.log(response);
            this.message = response
            this.toastr.success(this.message)
            this.onPageLoad()
          },
          error => {
            console.log(error);
            this.toastr.error('Error While Deleting..')
          })
      }

}
