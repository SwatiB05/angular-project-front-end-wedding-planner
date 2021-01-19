import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginService } from './auth/login/login.service';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home/welcomepage/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children:[
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[LoginService]},
    {path:'customers',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule),canActivate:[LoginService]},
    {path:'suppliers',loadChildren:()=>import('./supplier/supplier.module').then(m=>m.SupplierModule),canActivate:[LoginService]},
    {path:'cities',loadChildren:()=>import('./city/city.module').then(m=>m.CityModule),canActivate:[LoginService]},
    {path:'services',loadChildren:()=>import('./service/service.module').then(m=>m.ServiceModule),canActivate:[LoginService]},
    {path:'supplierService',loadChildren:()=>import('./supplier-services/supplier-services.module').then(m=>m.SupplierServicesModule),canActivate:[LoginService]},
    {path:'venues',loadChildren:()=>import('./venue/venue.module').then(m=>m.VenueModule),canActivate:[LoginService]},
    {path:'facilities',loadChildren:()=>import('./facility/facility.module').then(m=>m.FacilityModule)},
    {path:'venueFacilities',loadChildren:()=>import('./venue-facilities/venue-facilities.module').then(m=>m.VenueFacilitiesModule),canActivate:[LoginService]},
    {path:'bookings',loadChildren:()=>import('./booking/booking.module').then(m=>m.BookingModule),canActivate:[LoginService]},
    {path:'welcomepage',loadChildren:()=>import('./welcomepage/welcomepage.module').then(m=>m.WelcomepageModule)},
     {path:'dashboard',component:DashboardComponent,canActivate:[LoginService]}

  ]
  },
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
