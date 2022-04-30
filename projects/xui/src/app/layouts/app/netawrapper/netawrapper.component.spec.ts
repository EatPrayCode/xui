import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetawrapperComponent } from './netawrapper.component';

describe('NetawrapperComponent', () => {
  let component: NetawrapperComponent;
  let fixture: ComponentFixture<NetawrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetawrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetawrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
