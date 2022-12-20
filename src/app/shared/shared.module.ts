import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import mateial模組
import { MeterialModule } from './meterial/meterial.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MeterialModule
  ]
})
export class SharedModule { }
