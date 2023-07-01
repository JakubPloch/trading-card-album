import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  onSubmit(): void {
    console.log('Card added - code: ', this.cardCodeForm.value);
    this.cardCodeForm.reset();
    this.router.navigate(['/deck'])
  }

}
