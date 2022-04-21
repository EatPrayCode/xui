import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLiveNetasComponent } from './non-live-netas.component';

describe('NonLiveNetasComponent', () => {
  let component: NonLiveNetasComponent;
  let fixture: ComponentFixture<NonLiveNetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonLiveNetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLiveNetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
