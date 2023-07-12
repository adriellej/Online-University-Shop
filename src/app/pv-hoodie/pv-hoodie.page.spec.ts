import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvHoodiePage } from './pv-hoodie.page';

describe('PvHoodiePage', () => {
  let component: PvHoodiePage;
  let fixture: ComponentFixture<PvHoodiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvHoodiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
