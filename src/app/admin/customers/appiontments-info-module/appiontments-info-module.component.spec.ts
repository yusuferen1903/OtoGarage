import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiontmentsInfoModuleComponent } from './appiontments-info-module.component';

describe('AppiontmentsInfoModuleComponent', () => {
  let component: AppiontmentsInfoModuleComponent;
  let fixture: ComponentFixture<AppiontmentsInfoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppiontmentsInfoModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppiontmentsInfoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
