import { Component } from '@angular/core';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TradingCart } from 'src/app/shared/models/trading-card';

@Component({
  selector: 'app-deck-grid',
  templateUrl: './deck-grid.component.html',
  styleUrls: ['./deck-grid.component.css']
})
export class DeckGridComponent {

  constructor(
    private api: ApiService,
    private localActivatedCards: LocalStorageService,
  ) { }

  public cardsToRender: TradingCart[] = [];

  ngOnInit() {
    let codes: string[] = this.localActivatedCards.getActivatedCardCodes();
    codes.forEach(code => {
      this.api.get('/trading-card-code/' + code).subscribe((value) => {
        this.cardsToRender.push(value);
      });
    });
  }

}
