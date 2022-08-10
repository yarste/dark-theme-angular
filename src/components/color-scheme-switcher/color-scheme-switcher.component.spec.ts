import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSchemeSwitcherComponent } from './color-scheme-switcher.component';

describe('ColorSchemeSwitcherComponent', () => {
  let component: ColorSchemeSwitcherComponent;
  let fixture: ComponentFixture<ColorSchemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSchemeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSchemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
