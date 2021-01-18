import { Router } from '@angular/router';
import { AdminService } from './../../admin/admin.service';
import { Injectable } from '@angular/core';
import { Admin } from 'src/app/admin/admin.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  admin:Admin=new Admin()
  email:string
  password:string
  user: object = [
    { id: 1, user: 'Admin' },
    { id: 2, user: 'Customer' },
    { id: 3, user: 'Supplier' },
  ];
  selected:number
  invalidLogin = false

  constructor(private adminser:AdminService,
    private router:Router,
    private toastr: ToastrService,) { }

authenticate(email,password){
  // if (email === "javainuse" && password === "password") {
  //   console.log("in auth")
  //   sessionStorage.setItem('email', email)
  //   return true;
  // } else {
  //   return false;
  // }

if(this.selected==1) {
  this.adminser.adminLogin(this.email,this.password).subscribe((res) => {
    this.admin = res;
    console.log("inauth"+res)
    this.invalidLogin=false
    sessionStorage.setItem('email', email)
    this.toastr.success('Welcome Back ');
      return true;
    } ); 
    console.log(
      this.admin.firstName +
        '   ' +
        typeof this.admin +
        '   ' +
        typeof this.admin.firstName
    );
    
  }
  else {
    this.invalidLogin=true;
        (error) => {
          console.log(error);
          this.toastr.error('Please Check Credentials');
        };
    return false;
  }
}
      
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  // logOut() {
  //   sessionStorage.removeItem('username')
  // }
}