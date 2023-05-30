import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ShearedModule } from '../sheared/sheared.module';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { EntryComponent } from './entry/entry.component';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [
    AboutComponent,
    ProductComponent,
    ContactComponent,
    EntryComponent,
    LandingComponent,
    HomeComponent,
    Home2Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ShearedModule,
    MaterialModule,
    FormsModule

    
  ]
})
export class LandingPageModule { }
