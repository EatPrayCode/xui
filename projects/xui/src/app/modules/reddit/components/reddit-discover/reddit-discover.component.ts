import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reddit-discover',
  templateUrl: './reddit-discover.component.html',
  styleUrls: ['./reddit-discover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditDiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
