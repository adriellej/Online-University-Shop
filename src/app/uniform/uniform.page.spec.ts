import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniformPage } from './uniform.page';

describe('UniformPage', () => {
  let component: UniformPage;
  let fixture: ComponentFixture<UniformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UniformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
