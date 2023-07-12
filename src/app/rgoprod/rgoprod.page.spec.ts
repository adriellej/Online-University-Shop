import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RgoprodPage } from './rgoprod.page';

describe('RgoprodPage', () => {
  let component: RgoprodPage;
  let fixture: ComponentFixture<RgoprodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RgoprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
