import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvWindBreakerPage } from './pv-wind-breaker.page';

describe('PvWindBreakerPage', () => {
  let component: PvWindBreakerPage;
  let fixture: ComponentFixture<PvWindBreakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvWindBreakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
