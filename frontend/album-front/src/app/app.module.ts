import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeckGridComponent } from './pages/cards/deck-grid/deck-grid.component';
import { CardComponent } from './pages/cards/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckGridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
