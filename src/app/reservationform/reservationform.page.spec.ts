import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationformPage } from './reservationform.page';

describe('ReservationformPage', () => {
  let component: ReservationformPage;
  let fixture: ComponentFixture<ReservationformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservationformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
