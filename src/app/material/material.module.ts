import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';


const Material:any = [
  MatSidenavModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [Material]
})
export class MaterialModule { }
