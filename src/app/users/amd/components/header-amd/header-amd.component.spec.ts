import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAmdComponent } from './header-amd.component';

describe('HeaderAmdComponent', () => {
  let component: HeaderAmdComponent;
  let fixture: ComponentFixture<HeaderAmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
