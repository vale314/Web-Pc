import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIntelPcComponent } from './details-pc.component';

describe('DetailsIntelPcComponent', () => {
  let component: DetailsIntelPcComponent;
  let fixture: ComponentFixture<DetailsIntelPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsIntelPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIntelPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
