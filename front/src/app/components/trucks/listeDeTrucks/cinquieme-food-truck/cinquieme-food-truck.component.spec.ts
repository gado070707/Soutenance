import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinquiemeFoodTruckComponent } from './cinquieme-food-truck.component';

describe('CinquiemeFoodTruckComponent', () => {
  let component: CinquiemeFoodTruckComponent;
  let fixture: ComponentFixture<CinquiemeFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinquiemeFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinquiemeFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
