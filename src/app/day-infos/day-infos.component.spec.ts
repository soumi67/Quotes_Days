import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInfosComponent } from './day-infos.component';

describe('DayInfosComponent', () => {
  let component: DayInfosComponent;
  let fixture: ComponentFixture<DayInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
