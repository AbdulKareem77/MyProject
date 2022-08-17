import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogErrorComponent } from './mat-dialog-error.component';

describe('MatDialogErrorComponent', () => {
  let component: MatDialogErrorComponent;
  let fixture: ComponentFixture<MatDialogErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
