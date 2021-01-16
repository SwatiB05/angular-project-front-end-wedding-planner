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
user:object=[{id:1,user:"admin"},
{id:2,user:"customer"},
{id:3,user:"supplier"}]
selected:number
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
onLogin(){
if(this.selected==1){

}else if(this.selected==2){

}else {
  
}

}
}
