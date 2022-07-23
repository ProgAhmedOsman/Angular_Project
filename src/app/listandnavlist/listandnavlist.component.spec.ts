import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListandnavlistComponent } from './listandnavlist.component';

describe('ListandnavlistComponent', () => {
  let component: ListandnavlistComponent;
  let fixture: ComponentFixture<ListandnavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListandnavlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListandnavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
