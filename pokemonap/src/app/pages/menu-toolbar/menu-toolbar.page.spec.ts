import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuToolbarPage } from './menu-toolbar.page';

describe('MenuToolbarPage', () => {
  let component: MenuToolbarPage;
  let fixture: ComponentFixture<MenuToolbarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
