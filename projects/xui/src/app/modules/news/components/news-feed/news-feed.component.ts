import { BehaviorSubject } from 'rxjs';
import { UserService } from '~/app/services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {

  public feeds$: BehaviorSubject<any> = new BehaviorSubject(null);
  loading: boolean = true;
  selected: any = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getLiveNews().subscribe(res => {
      let data: any = res[0].data.articles || [];
      this.feeds$.next(data);
      console.log(data);
      this.loading = false;
    });
  }

}
