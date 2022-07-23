import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoGraphComponent } from './typo-graph.component';

describe('TypoGraphComponent', () => {
  let component: TypoGraphComponent;
  let fixture: ComponentFixture<TypoGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypoGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
