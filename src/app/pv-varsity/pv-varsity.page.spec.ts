import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvVarsityPage } from './pv-varsity.page';

describe('PvVarsityPage', () => {
  let component: PvVarsityPage;
  let fixture: ComponentFixture<PvVarsityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvVarsityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
