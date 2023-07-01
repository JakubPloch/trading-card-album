import { Component } from '@angular/core';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css']
})
export class CardsGridComponent {
cardsAmount = new Array(10).fill('hello');

constructor(protected api: ApiService) {

}

refresh = new BehaviorSubject<boolean>(false);
request$ = this.refresh.pipe(startWith(true), switchMap(x => this.api.get('/trading-card')));


ngOnInit(): void {
  console.log(this.request$);
}


}
