import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvCollegeShirtPage } from './pv-college-shirt.page';

describe('PvCollegeShirtPage', () => {
  let component: PvCollegeShirtPage;
  let fixture: ComponentFixture<PvCollegeShirtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvCollegeShirtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
