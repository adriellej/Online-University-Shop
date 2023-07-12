import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddonsPage } from './addons.page';

describe('AddonsPage', () => {
  let component: AddonsPage;
  let fixture: ComponentFixture<AddonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
