import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerAppRoutingModule } from './container-app-routing.module';
import { ContainerAppComponent } from './container-app.component';


@NgModule({
  declarations: [ContainerAppComponent],
  imports: [
    CommonModule,
    ContainerAppRoutingModule
  ]
})
export class ContainerAppModule { }
