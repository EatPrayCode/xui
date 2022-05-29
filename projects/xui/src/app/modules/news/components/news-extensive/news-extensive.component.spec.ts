import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsExtensiveComponent } from './news-extensive.component';

describe('NewsExtensiveComponent', () => {
  let component: NewsExtensiveComponent;
  let fixture: ComponentFixture<NewsExtensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsExtensiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsExtensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
