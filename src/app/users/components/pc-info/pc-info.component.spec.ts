import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcInfoComponent } from './pc-info.component';

describe('PcInfoComponent', () => {
  let component: PcInfoComponent;
  let fixture: ComponentFixture<PcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
