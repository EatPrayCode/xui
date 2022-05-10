import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditLayoutComponent } from './reddit-layout.component';

describe('RedditLayoutComponent', () => {
  let component: RedditLayoutComponent;
  let fixture: ComponentFixture<RedditLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
