import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasByNationalComponent } from './netas-by-national.component';

describe('NetasByNationalComponent', () => {
  let component: NetasByNationalComponent;
  let fixture: ComponentFixture<NetasByNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasByNationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasByNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
