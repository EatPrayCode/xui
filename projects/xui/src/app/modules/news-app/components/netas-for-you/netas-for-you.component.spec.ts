import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasForYouComponent } from './netas-for-you.component';

describe('NetasForYouComponent', () => {
  let component: NetasForYouComponent;
  let fixture: ComponentFixture<NetasForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetasForYouComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
