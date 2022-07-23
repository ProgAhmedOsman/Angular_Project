import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDatailsComponent } from './department-datails.component';

describe('DepartmentDatailsComponent', () => {
  let component: DepartmentDatailsComponent;
  let fixture: ComponentFixture<DepartmentDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
