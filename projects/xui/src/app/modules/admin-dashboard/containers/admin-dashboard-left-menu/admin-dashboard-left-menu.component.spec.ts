import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLeftMenuComponent } from './admin-dashboard-left-menu.component';

describe('AdminDashboardLeftMenuComponent', () => {
  let component: AdminDashboardLeftMenuComponent;
  let fixture: ComponentFixture<AdminDashboardLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
