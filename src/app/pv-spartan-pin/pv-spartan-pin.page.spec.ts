import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvSpartanPinPage } from './pv-spartan-pin.page';

describe('PvSpartanPinPage', () => {
  let component: PvSpartanPinPage;
  let fixture: ComponentFixture<PvSpartanPinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvSpartanPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
