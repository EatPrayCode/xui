import { BehaviorSubject, Observable } from 'rxjs';
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
  value = '';

  isAuthenticated$: Observable<boolean> | undefined;

  examples: any = [
    { link: 'NDTV', label: 'anms.examples.menu.todos' },
    { link: 'CNN', label: 'anms.examples.menu.stocks' },
    { link: 'BBC', label: 'anms.examples.menu.theming' },
    { link: 'REPUBLIC', label: 'anms.examples.menu.crud' },
    { link: 'AAJTAK', label: 'anms.examples.menu.crud' },
    { link: 'TIMES NOW', label: 'anms.examples.menu.crud' },
    { link: 'News X', label: 'anms.examples.menu.auth', auth: true }
  ];
  selectedValue = this.examples[0];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getLiveNews().subscribe(res => {
      let data: any = res[0].data.articles || [];
      this.feeds$.next(data);
      this.loading = false;
    });
  }

}
