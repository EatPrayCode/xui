import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-youtube-content-container',
  templateUrl: './youtube-content-container.component.html',
  styleUrls: ['./youtube-content-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeContentContainerComponent implements OnInit {

  public isMiniPlayerMode$?: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}
