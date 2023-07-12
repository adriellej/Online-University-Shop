import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasualPage } from './casual.page';

describe('CasualPage', () => {
  let component: CasualPage;
  let fixture: ComponentFixture<CasualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
