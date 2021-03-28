import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [
    {path: 'imagenes', component: ImagenesComponent},
    {path: 'banner', component: PrincipalComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
