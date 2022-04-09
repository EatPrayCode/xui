import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../../../shared/shared.module';

import { NetaComponent } from './neta.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('NetaComponent', () => {
  let component: NetaComponent;
  let fixture: ComponentFixture<NetaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        NoopAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        provideMockStore({
          initialState: {
            auth: {
              isAuthenticated: false
            }
          }
        })
      ],
      declarations: [NetaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
