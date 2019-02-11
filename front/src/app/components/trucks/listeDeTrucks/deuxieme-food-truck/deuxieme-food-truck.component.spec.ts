import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemeFoodTruckComponent } from './deuxieme-food-truck.component';

describe('DeuxiemeFoodTruckComponent', () => {
  let component: DeuxiemeFoodTruckComponent;
  let fixture: ComponentFixture<DeuxiemeFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuxiemeFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxiemeFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
