import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvTshirtAPage } from './pv-tshirt-a.page';

describe('PvTshirtAPage', () => {
  let component: PvTshirtAPage;
  let fixture: ComponentFixture<PvTshirtAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvTshirtAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
