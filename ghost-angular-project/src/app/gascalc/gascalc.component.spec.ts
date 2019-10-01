import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GascalcComponent } from './gascalc.component';

describe('GascalcComponent', () => {
  let component: GascalcComponent;
  let fixture: ComponentFixture<GascalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GascalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GascalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
