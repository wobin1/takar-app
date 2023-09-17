import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { MainAppComponent } from './main-app/main-app.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShearedModule } from './sheared/sheared.module';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { MainAppModule } from './main-app/main-app.module';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AccountVerificationComponent } from './auth/account-verification/account-verification.component';
import { ForgetPasswordVerificationComponent } from './auth/forget-password-verification/forget-password-verification.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './sheard/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AccountVerificationComponent,
    ForgetPasswordVerificationComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LandingPageModule,
    ShearedModule,
    FormsModule,
    MainAppModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
