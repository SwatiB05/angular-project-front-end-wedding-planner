import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children:[
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
    {path:'customers',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
    {path:'suppliers',loadChildren:()=>import('./supplier/supplier.module').then(m=>m.SupplierModule)},
    {path:'cities',loadChildren:()=>import('./city/city.module').then(m=>m.CityModule)},
    {path:'services',loadChildren:()=>import('./service/service.module').then(m=>m.ServiceModule)},
    {path:'supplierService',loadChildren:()=>import('./supplier-services/supplier-services.module').then(m=>m.SupplierServicesModule)},
    {path:'venues',loadChildren:()=>import('./venue/venue.module').then(m=>m.VenueModule)},
    {path:'facilities',loadChildren:()=>import('./facility/facility.module').then(m=>m.FacilityModule)},
    {path:'venueFacilities',loadChildren:()=>import('./venue-facilities/venue-facilities.module').then(m=>m.VenueFacilitiesModule)},
    {path:'bookings',loadChildren:()=>import('./booking/booking.module').then(m=>m.BookingModule)}
  ]
  },
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
