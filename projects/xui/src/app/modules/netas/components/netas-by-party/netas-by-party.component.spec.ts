import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasByPartyComponent } from './netas-by-party.component';

describe('NetasByPartyComponent', () => {
  let component: NetasByPartyComponent;
  let fixture: ComponentFixture<NetasByPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasByPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasByPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
