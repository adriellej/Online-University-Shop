import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NocartPage } from './nocart.page';

describe('NocartPage', () => {
  let component: NocartPage;
  let fixture: ComponentFixture<NocartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NocartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
