import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisiemeFoodTruckComponent } from './troisieme-food-truck.component';

describe('TroisiemeFoodTruckComponent', () => {
  let component: TroisiemeFoodTruckComponent;
  let fixture: ComponentFixture<TroisiemeFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroisiemeFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisiemeFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
