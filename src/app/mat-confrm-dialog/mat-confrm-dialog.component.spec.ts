import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfrmDialogComponent } from './mat-confrm-dialog.component';

describe('MatConfrmDialogComponent', () => {
  let component: MatConfrmDialogComponent;
  let fixture: ComponentFixture<MatConfrmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConfrmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatConfrmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
