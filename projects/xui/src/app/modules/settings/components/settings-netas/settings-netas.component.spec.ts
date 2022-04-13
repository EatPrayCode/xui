import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNetasComponent } from './settings-netas.component';

describe('SettingsNetasComponent', () => {
  let component: SettingsNetasComponent;
  let fixture: ComponentFixture<SettingsNetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsNetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
