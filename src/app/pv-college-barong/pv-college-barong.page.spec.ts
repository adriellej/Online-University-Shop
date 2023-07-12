import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PVCollegeBarongPage } from './pv-college-barong.page';

describe('PVCollegeBarongPage', () => {
  let component: PVCollegeBarongPage;
  let fixture: ComponentFixture<PVCollegeBarongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PVCollegeBarongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
