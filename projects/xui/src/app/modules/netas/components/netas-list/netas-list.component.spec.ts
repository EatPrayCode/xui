import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasListComponent } from './netas-list.component';

describe('NetasListComponent', () => {
  let component: NetasListComponent;
  let fixture: ComponentFixture<NetasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
