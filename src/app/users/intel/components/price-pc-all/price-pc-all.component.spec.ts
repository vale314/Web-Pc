import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePcAllComponent } from './price-pc-all.component';

describe('PricePcAllComponent', () => {
  let component: PricePcAllComponent;
  let fixture: ComponentFixture<PricePcAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePcAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePcAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
