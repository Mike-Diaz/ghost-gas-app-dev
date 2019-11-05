import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFuelUpComponent } from './vehicle-fuel-up.component';

describe('VehicleFuelUpComponent', () => {
  let component: VehicleFuelUpComponent;
  let fixture: ComponentFixture<VehicleFuelUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFuelUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFuelUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
