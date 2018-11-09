import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeaderIntelComponent } from './simple-header-intel.component';

describe('SimpleHeaderIntelComponent', () => {
  let component: SimpleHeaderIntelComponent;
  let fixture: ComponentFixture<SimpleHeaderIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHeaderIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHeaderIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
