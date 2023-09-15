import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    MenuComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    LoaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MenuComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    LoaderComponent,
    DetailComponent
    
  ]
})
export class ShearedModule { }
