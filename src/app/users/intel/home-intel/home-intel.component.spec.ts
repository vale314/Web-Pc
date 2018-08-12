import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntelComponent } from './home-intel.component';

describe('HomeIntelComponent', () => {
  let component: HomeIntelComponent;
  let fixture: ComponentFixture<HomeIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
