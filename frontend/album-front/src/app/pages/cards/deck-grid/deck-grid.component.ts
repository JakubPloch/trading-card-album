import { Component } from '@angular/core';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck-grid',
  templateUrl: './deck-grid.component.html',
  styleUrls: ['./deck-grid.component.css']
})
export class DeckGridComponent {

  constructor(protected api: ApiService) { }
  
  refresh = new BehaviorSubject<boolean>(false);
  request$ = this.refresh.pipe(startWith(true), switchMap(x => this.api.get('/trading-card')));
  
}
