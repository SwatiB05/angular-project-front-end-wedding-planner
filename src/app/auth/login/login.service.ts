import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {
  encryptSecretKey: number = 569345;
  token: string;

  isAdmin: boolean = false;
  isCustomer: boolean = false;
  isSupplier: boolean = false;
  constructor(private router: Router, private toastr: ToastrService) {}

  authenticate(data: string) {
    this.token = CryptoJS.AES.encrypt(
      data,
      this.encryptSecretKey.toString()
    ).toString();

    sessionStorage.setItem('token', this.token);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    this.isAdmin = false;
    this.isCustomer = false;
    this.isSupplier = false;
    sessionStorage.removeItem('token');
    this.router.navigate(['auth/login']);
    this.toastr.success('You have Log Out');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn()) return true;
    this.toastr.warning('Please Login');
    this.router.navigate(['home/welcomepage/home']);

    return false;
  }
}
