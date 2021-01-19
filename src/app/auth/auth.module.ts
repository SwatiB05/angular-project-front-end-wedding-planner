import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [AuthService],
})
export class AuthModule {}
