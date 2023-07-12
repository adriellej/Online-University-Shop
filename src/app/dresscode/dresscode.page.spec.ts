import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DresscodePage } from './dresscode.page';

describe('DresscodePage', () => {
  let component: DresscodePage;
  let fixture: ComponentFixture<DresscodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DresscodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
