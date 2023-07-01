import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, startWith, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-card-activation',
  templateUrl: './card-activation.component.html',
  styleUrls: ['./card-activation.component.css']
})
export class CardActivationComponent {

  cardCodeForm = this.formBuilder.group({
    cardCode: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localActivatedCards: LocalStorageService,
    private api: ApiService,
    private toastr: ToastrService,
  ) { }

  onSubmit(): void {
    if (this.cardCodeForm.controls.cardCode.value !== null) {
      let newCardCode: string = this.cardCodeForm.controls.cardCode.value;
      this.handleNewCardCode(newCardCode);
    }
    this.cardCodeForm.reset();
    this.router.navigate(['/deck'])
  }

  private handleNewCardCode(cardCode: string): void {
    let refresh = new BehaviorSubject<boolean>(false);
    let request$ = refresh.pipe(startWith(true), switchMap(x => this.api.get('/trading-card-exists/' + cardCode)));

    request$.subscribe((response) => {
      if (response) {
        if (this.localActivatedCards.checkIfAlreadyActivated(cardCode))
          this.toastr.warning("Card already activated!");
        else{
          this.toastr.success("Card activated!");
          this.localActivatedCards.addActivatedCardCode(cardCode);
        }
      } else {
        this.toastr.error("Invalid Card Code.");
      }
    });
  }

}