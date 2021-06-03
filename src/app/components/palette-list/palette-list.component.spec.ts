import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteListComponent } from './palette-list.component';

describe('PaletteListComponent', () => {
  let component: PaletteListComponent;
  let fixture: ComponentFixture<PaletteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
