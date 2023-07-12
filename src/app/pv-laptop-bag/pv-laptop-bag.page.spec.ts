import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvLaptopBagPage } from './pv-laptop-bag.page';

describe('PvLaptopBagPage', () => {
  let component: PvLaptopBagPage;
  let fixture: ComponentFixture<PvLaptopBagPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvLaptopBagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
