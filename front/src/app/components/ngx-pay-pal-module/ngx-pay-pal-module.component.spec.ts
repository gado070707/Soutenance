import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPayPalModuleComponent } from './ngx-pay-pal-module.component';

describe('NgxPayPalModuleComponent', () => {
  let component: NgxPayPalModuleComponent;
  let fixture: ComponentFixture<NgxPayPalModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPayPalModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPayPalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
