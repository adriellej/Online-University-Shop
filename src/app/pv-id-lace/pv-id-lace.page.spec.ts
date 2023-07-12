import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvIdLacePage } from './pv-id-lace.page';

describe('PvIdLacePage', () => {
  let component: PvIdLacePage;
  let fixture: ComponentFixture<PvIdLacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvIdLacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
