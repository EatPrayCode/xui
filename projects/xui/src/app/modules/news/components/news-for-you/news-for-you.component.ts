import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-news-for-you',
  templateUrl: './news-for-you.component.html',
  styleUrls: ['./news-for-you.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsForYouComponent implements OnInit {

  window: any;

  constructor() { }

  ngOnInit(): void {
  }

}
