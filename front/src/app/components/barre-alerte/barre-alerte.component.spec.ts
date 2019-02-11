import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreAlerteComponent } from './barre-alerte.component';

describe('BarreAlerteComponent', () => {
  let component: BarreAlerteComponent;
  let fixture: ComponentFixture<BarreAlerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
