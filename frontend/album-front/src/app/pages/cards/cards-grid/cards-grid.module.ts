import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsGridRoutingModule } from './cards-grid-routing.module';
import { CardsGridComponent } from './cards-grid.component';


@NgModule({
  declarations: [
    CardsGridComponent
  ],
  imports: [
    CommonModule,
    CardsGridRoutingModule
  ]
})
export class CardsGridModule { }
