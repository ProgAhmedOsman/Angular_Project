import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompletComponent } from './auto-complet.component';

describe('AutoCompletComponent', () => {
  let component: AutoCompletComponent;
  let fixture: ComponentFixture<AutoCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
