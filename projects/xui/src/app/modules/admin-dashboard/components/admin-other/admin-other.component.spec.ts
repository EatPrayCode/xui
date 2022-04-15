import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOtherComponent } from './admin-other.component';

describe('AdminOtherComponent', () => {
  let component: AdminOtherComponent;
  let fixture: ComponentFixture<AdminOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
