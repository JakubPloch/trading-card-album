import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivationComponent } from './card-activation.component';

describe('CardActivationComponent', () => {
  let component: CardActivationComponent;
  let fixture: ComponentFixture<CardActivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardActivationComponent]
    });
    fixture = TestBed.createComponent(CardActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
