import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShirtsPage } from './shirts.page';

describe('ShirtsPage', () => {
  let component: ShirtsPage;
  let fixture: ComponentFixture<ShirtsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShirtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
