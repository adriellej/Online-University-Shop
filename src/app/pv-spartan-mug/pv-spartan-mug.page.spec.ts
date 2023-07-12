import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PvSpartanMugPage } from './pv-spartan-mug.page';

describe('PvSpartanMugPage', () => {
  let component: PvSpartanMugPage;
  let fixture: ComponentFixture<PvSpartanMugPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PvSpartanMugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
