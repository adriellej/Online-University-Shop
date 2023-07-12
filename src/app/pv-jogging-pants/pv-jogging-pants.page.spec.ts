import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvJoggingPantsPage } from './pv-jogging-pants.page';

describe('PvJoggingPantsPage', () => {
  let component: PvJoggingPantsPage;
  let fixture: ComponentFixture<PvJoggingPantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvJoggingPantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
