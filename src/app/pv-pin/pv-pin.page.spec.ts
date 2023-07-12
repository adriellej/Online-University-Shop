import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvPinPage } from './pv-pin.page';

describe('PvPinPage', () => {
  let component: PvPinPage;
  let fixture: ComponentFixture<PvPinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
