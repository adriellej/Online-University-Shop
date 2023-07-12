import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvTshirtBPage } from './pv-tshirt-b.page';

describe('PvTshirtBPage', () => {
  let component: PvTshirtBPage;
  let fixture: ComponentFixture<PvTshirtBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvTshirtBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
