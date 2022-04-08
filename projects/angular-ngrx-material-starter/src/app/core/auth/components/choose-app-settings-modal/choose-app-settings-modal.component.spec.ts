import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAppSettingsModalComponent } from './choose-app-settings-modal.component';

describe('ChooseAppSettingsModalComponent', () => {
  let component: ChooseAppSettingsModalComponent;
  let fixture: ComponentFixture<ChooseAppSettingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseAppSettingsModalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAppSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
