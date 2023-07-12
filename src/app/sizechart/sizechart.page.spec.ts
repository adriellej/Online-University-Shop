import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SizechartPage } from './sizechart.page';

describe('SizechartPage', () => {
  let component: SizechartPage;
  let fixture: ComponentFixture<SizechartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SizechartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
