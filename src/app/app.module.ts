// import { FacilityService } from './facility.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    

  ],
  exports:[AppRoutingModule,RouterModule],
  //add services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
