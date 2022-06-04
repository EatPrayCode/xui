import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDiscoverComponent } from './reddit-discover.component';

describe('RedditDiscoverComponent', () => {
  let component: RedditDiscoverComponent;
  let fixture: ComponentFixture<RedditDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
