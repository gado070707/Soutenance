import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupopComponent } from './popupop.component';

describe('PopupopComponent', () => {
  let component: PopupopComponent;
  let fixture: ComponentFixture<PopupopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
