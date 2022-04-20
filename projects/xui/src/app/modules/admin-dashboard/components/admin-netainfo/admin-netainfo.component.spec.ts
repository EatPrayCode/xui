import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNetainfoComponent } from './admin-netainfo.component';

describe('AdminNetainfoComponent', () => {
  let component: AdminNetainfoComponent;
  let fixture: ComponentFixture<AdminNetainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNetainfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNetainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
