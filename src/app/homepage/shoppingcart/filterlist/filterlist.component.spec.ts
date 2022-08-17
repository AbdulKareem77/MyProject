import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterlistComponent } from './filterlist.component';

describe('FilterlistComponent', () => {
  let component: FilterlistComponent;
  let fixture: ComponentFixture<FilterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
