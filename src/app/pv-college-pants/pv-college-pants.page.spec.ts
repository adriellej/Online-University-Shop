import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvCollegePantsPage } from './pv-college-pants.page';

describe('PvCollegePantsPage', () => {
  let component: PvCollegePantsPage;
  let fixture: ComponentFixture<PvCollegePantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvCollegePantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
