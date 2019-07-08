import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatCardModule, MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
