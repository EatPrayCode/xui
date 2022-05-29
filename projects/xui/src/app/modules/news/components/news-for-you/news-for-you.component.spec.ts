import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsForYouComponent } from './news-for-you.component';

describe('NewsForYouComponent', () => {
  let component: NewsForYouComponent;
  let fixture: ComponentFixture<NewsForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
