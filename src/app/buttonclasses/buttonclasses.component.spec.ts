import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonclassesComponent } from './buttonclasses.component';

describe('ButtonclassesComponent', () => {
  let component: ButtonclassesComponent;
  let fixture: ComponentFixture<ButtonclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonclassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
