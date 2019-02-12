import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierFoodTruckComponent } from './premier-food-truck.component';

describe('PremierFoodTruckComponent', () => {
  let component: PremierFoodTruckComponent;
  let fixture: ComponentFixture<PremierFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
