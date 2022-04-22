import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasByStateComponent } from './netas-by-state.component';

describe('NetasByStateComponent', () => {
  let component: NetasByStateComponent;
  let fixture: ComponentFixture<NetasByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasByStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
