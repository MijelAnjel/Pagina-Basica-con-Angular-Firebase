import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const myModule = [
  MatTabsModule,
  MatCardModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    FormsModule],
  exports: [myModule]
})
export class MaterialModule { }
