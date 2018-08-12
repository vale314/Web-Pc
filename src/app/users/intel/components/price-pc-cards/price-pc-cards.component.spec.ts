import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePcCardsComponent } from './price-pc-cards.component';

describe('PricePcCardsComponent', () => {
  let component: PricePcCardsComponent;
  let fixture: ComponentFixture<PricePcCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePcCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePcCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
