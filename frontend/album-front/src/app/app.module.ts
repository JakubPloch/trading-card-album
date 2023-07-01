import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeckGridComponent } from './pages/cards/deck-grid/deck-grid.component';
import { CardComponent } from './pages/cards/card/card.component';
import { NavbarComponent } from './shared/utils/navbar/navbar.component';
import { CardActivationComponent } from './pages/cards/card-activation/card-activation.component';
import { FooterComponent } from './shared/utils/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeckGridComponent,
    CardComponent,
    NavbarComponent,
    CardActivationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
