import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckGridComponent } from './pages/cards/deck-grid/deck-grid.component';
import { CardActivationComponent } from './pages/cards/card-activation/card-activation.component';

const routes: Routes = [
  { path: 'deck', component: DeckGridComponent },
  { path: 'enter-code', component: CardActivationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
