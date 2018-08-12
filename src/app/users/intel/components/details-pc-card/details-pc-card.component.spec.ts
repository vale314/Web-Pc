import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPcCardComponent } from './details-pc-card.component';

describe('DetailsPcCardComponent', () => {
  let component: DetailsPcCardComponent;
  let fixture: ComponentFixture<DetailsPcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
