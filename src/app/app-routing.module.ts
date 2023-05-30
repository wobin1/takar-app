import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { ProductComponent } from './landing-page/product/product.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { LandingComponent } from './landing-page/landing.component';
import { HomeComponent } from './landing-page/home/home.component';
import { RegisterComponent } from './sheared/register/register.component';
import { Home2Component } from './landing-page/home2/home2.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', component: LandingComponent, children: [
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProductComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'registration', component: Home2Component},
    {path: '', component: HomeComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
