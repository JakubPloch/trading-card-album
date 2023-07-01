import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckGridComponent } from './pages/cards/deck-grid/deck-grid.component';

const routes: Routes = [
  { path: 'deck', component: DeckGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
