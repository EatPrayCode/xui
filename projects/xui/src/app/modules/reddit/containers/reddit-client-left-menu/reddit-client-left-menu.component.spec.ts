import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditClientLeftMenuComponent } from './reddit-client-left-menu.component';

describe('RedditClientLeftMenuComponent', () => {
  let component: RedditClientLeftMenuComponent;
  let fixture: ComponentFixture<RedditClientLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditClientLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditClientLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
