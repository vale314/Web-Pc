import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntelComponent } from './header-intel.component';

describe('HeaderIntelComponent', () => {
  let component: HeaderIntelComponent;
  let fixture: ComponentFixture<HeaderIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
