import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectLeftMenuComponent } from './connect-left-menu.component';

describe('ConnectLeftMenuComponent', () => {
  let component: ConnectLeftMenuComponent;
  let fixture: ComponentFixture<ConnectLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
