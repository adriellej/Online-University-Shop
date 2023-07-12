import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvCollegeBlousePage } from './pv-college-blouse.page';

describe('PvCollegeBlousePage', () => {
  let component: PvCollegeBlousePage;
  let fixture: ComponentFixture<PvCollegeBlousePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvCollegeBlousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
