import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomepageRoutingModule } from './welcomepage-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [HomeComponent, ContactusComponent],
  imports: [CommonModule, WelcomepageRoutingModule, RouterModule, FormsModule],
})
export class WelcomepageModule {}
