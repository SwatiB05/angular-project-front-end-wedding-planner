import { login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=''
password=''
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
onLogin(){

// 
}
}
