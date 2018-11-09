import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcSimilarComponent } from './pc-similar.component';

describe('PcSimilarComponent', () => {
  let component: PcSimilarComponent;
  let fixture: ComponentFixture<PcSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
