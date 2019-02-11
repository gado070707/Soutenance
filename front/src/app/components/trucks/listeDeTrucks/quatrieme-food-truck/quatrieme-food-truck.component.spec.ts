import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatriemeFoodTruckComponent } from './quatrieme-food-truck.component';

describe('QuatriemeFoodTruckComponent', () => {
  let component: QuatriemeFoodTruckComponent;
  let fixture: ComponentFixture<QuatriemeFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuatriemeFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatriemeFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
