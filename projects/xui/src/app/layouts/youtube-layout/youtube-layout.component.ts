import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-youtube-layout',
  templateUrl: './youtube-layout.component.html',
  styleUrls: ['./youtube-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeLayoutComponent implements OnInit {

  public isMiniPlayerMode$?: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}
