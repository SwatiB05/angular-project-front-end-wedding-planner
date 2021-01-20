import { LoginService } from './../auth/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}
   id = sessionStorage.getItem('id');
}
