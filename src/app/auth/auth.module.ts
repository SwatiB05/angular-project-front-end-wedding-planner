import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
