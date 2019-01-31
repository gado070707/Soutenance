import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtruckComponent } from './formtruck.component';

describe('FormtruckComponent', () => {
  let component: FormtruckComponent;
  let fixture: ComponentFixture<FormtruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
