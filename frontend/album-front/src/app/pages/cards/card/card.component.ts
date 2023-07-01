import { Component, Input } from '@angular/core';
import { TradingCart } from 'src/app/shared/models/trading-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() tradingCard!: TradingCart; 

}
