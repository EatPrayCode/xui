import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaLayoutComponent } from './neta-layout.component';

describe('NetaLayoutComponent', () => {
  let component: NetaLayoutComponent;
  let fixture: ComponentFixture<NetaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
