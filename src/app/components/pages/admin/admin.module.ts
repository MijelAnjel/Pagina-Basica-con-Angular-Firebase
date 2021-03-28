import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/material.module';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [AdminComponent, ImagenesComponent, PrincipalComponent, InicioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
