import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassicPage } from './classic.page';

describe('ClassicPage', () => {
  let component: ClassicPage;
  let fixture: ComponentFixture<ClassicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClassicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
