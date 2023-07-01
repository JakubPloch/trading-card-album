import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckGridComponent } from './deck-grid.component';

describe('DeckGridComponent', () => {
  let component: DeckGridComponent;
  let fixture: ComponentFixture<DeckGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckGridComponent]
    });
    fixture = TestBed.createComponent(DeckGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
