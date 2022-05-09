import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeContentContainerComponent } from './youtube-content-container.component';

describe('YoutubeContentContainerComponent', () => {
  let component: YoutubeContentContainerComponent;
  let fixture: ComponentFixture<YoutubeContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeContentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
