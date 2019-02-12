import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixiemeFoodTruckComponent } from './sixieme-food-truck.component';

describe('SixiemeFoodTruckComponent', () => {
  let component: SixiemeFoodTruckComponent;
  let fixture: ComponentFixture<SixiemeFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixiemeFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixiemeFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
