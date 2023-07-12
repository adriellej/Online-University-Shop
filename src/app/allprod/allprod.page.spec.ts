import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllprodPage } from './allprod.page';

describe('AllprodPage', () => {
  let component: AllprodPage;
  let fixture: ComponentFixture<AllprodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
