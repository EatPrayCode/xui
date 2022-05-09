import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeContentHomeComponent } from './youtube-content-home.component';

describe('YoutubeContentHomeComponent', () => {
  let component: YoutubeContentHomeComponent;
  let fixture: ComponentFixture<YoutubeContentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeContentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
