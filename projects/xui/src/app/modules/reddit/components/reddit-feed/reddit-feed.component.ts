import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
