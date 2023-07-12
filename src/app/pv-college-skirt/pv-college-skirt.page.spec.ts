import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvCollegeSkirtPage } from './pv-college-skirt.page';

describe('PvCollegeSkirtPage', () => {
  let component: PvCollegeSkirtPage;
  let fixture: ComponentFixture<PvCollegeSkirtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvCollegeSkirtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
