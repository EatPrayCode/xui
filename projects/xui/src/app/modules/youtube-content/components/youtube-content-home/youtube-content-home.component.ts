import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-youtube-content-home',
  templateUrl: './youtube-content-home.component.html',
  styleUrls: ['./youtube-content-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeContentHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
