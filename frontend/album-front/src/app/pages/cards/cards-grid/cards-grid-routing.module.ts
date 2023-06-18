import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsGridComponent } from './cards-grid.component';

const routes: Routes = [{ path: '', component: CardsGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsGridRoutingModule { }
