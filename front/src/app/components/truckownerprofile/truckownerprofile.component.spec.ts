import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckownerprofileComponent } from './truckownerprofile.component';

describe('TruckownerprofileComponent', () => {
  let component: TruckownerprofileComponent;
  let fixture: ComponentFixture<TruckownerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckownerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckownerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
