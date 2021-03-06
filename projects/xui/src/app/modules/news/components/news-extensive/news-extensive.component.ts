import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { map } from 'highcharts';
import { combineLatest, Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { DataService } from '../../../../services/data.service';
import { UserService } from '~/app/services/user.service';
import { cloneDeep } from 'lodash-es';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { importFeedsFromVersion3 } from '~/app/modules/rss-reader/backward-compatibility';
import { TABLES, DELAY100 } from '~/app/modules/rss-reader/constants';
import { CoreService } from '~/app/modules/rss-reader/core.service';
import { isValidHttpUrl } from '~/app/modules/rss-reader/helpers';
import { FeedItem, FeedLoading, FeedError } from '~/app/modules/rss-reader/models';

@Component({
  selector: 'app-news-extensive',
  templateUrl: './news-extensive.component.html',
  styleUrls: ['./news-extensive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsExtensiveComponent implements OnInit, OnDestroy {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  allNetas$: Observable<any> = of([]);
  features: any[] = [];
  selected = false;
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

  feeds: FeedItem[] = [];
  addFeedMode: boolean = true;
  godMode: boolean = false;
  rawFeedURLs: string = '';
  feedLoading: FeedLoading = {};
  feedError: FeedError = {};
  loading: boolean = true;
  refreshLoader: boolean = false;
  public ngUnsubscribe$ = new Subject<void>();
  public feeds$: BehaviorSubject<any> = new BehaviorSubject(null);
  public test$: BehaviorSubject<any> = new BehaviorSubject(null);
  title = 'Card View Demo';

  gridColumns = 3;

  identify = (index: number, feed: FeedItem) => feed.id;

  constructor(
    // private dbService: NgxIndexedDBService,
    private userService: UserService,
    private coreService: CoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDefaultFeeds();
    this.setCardView();
    this.loading = true;
    this.userService.getLiveNews().subscribe(res => {
      let data: any = res[1].data.articles || [];
      this.feeds$.next(data);
      this.loading = false;
    });
  }


  onViewNeta(neta) {
    const id = neta.id;
    this.router.navigate([`news/news-feed/${id}`]);
  }

  getDefaultFeeds() {
    this.coreService.getDefaultFeeds({}).pipe(
      takeUntil(this.ngUnsubscribe$),
      debounceTime(DELAY100),
      tap(res => {
        this.feeds$.next(res);
      })
    );
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  addNewsPublication() {
    // const rawFeedStrings = 'https://www.thehindu.com/news/national/?service=rss';
    // // this.addFeeds(rawFeedStrings);
    // // this.dbService.add(TABLES.FEEDS, { rawFeedStrings })
    // this.coreService.addFeed({}).subscribe(res => {
    //   this.getDefaultFeeds();
    // });
  }

  get shareIsSuported(): boolean {
    return !!navigator.share;
  }

  handleClickSubTab(e) {

  }

  addFeeds(rawFeedStrings: string): void {
    // this.addFeedMode = true;
    // this.rawFeedURLs = '';
    // const newFeeds$ = rawFeedStrings
    //   .split('\n')
    //   .map(s => s.trim())
    //   .filter(s => s)
    //   .filter(s => isValidHttpUrl(s))
    //   .map(url => this.dbService.add(TABLES.FEEDS, { url }));

    // combineLatest(newFeeds$)
    //   .subscribe(() => {
    //     this.feeds$.next()
    //   });
  }

  refreshFeeds(): void {
    this.refreshLoader = true;
    this.feeds$.pipe(take(1)).subscribe(res => {
      this.coreService.refreshFeeds(res).subscribe(res => {
        setTimeout(() => {
          this.refreshLoader = false;
        }, 100);
      });
    });
  }

  share(): void {
    navigator.share?.({
      title: 'Stupid RSS',
      text: this.feeds.map(f => f.url).join(' \n'),
      url: location.href,
    }); // share the URL of MDN
  }


  unregister(): void {
    // const result = confirm('Unregister the Service Worker?');
    // if (result === true) {
    //   navigator.serviceWorker?.getRegistrations().then((registrations) => {
    //     for (const registration of registrations) {
    //       registration.unregister();
    //     }
    //   });
    // }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  isListView = false;

  // Template props 
  numCols = 0;
  rowHeight = '1:1';
  gutterSize = '0';

  // Defaults props
  defaultCols = 3;
  defaultRowHeight = '1:1';
  defaultGutterSize = '10';

  // View specific props
  listViewHeight = '100px';

  items: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  itemsNames: any = [
    'https://www.yahoo.com/news/rss',
    'https://lifehacker.com/rss',
    'http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories',
    'http://rss.cnn.com/rss/cnn_topstories.rss',
    'https://www.latimes.com/local/rss2.0.xml',
    'https://cdn.feedcontrol.net/8/1114-wioSIX3uu8MEj.xml',
    'https://www.indiatoday.in/rss/1206578',
    'https://indianexpress.com/feed/',
    'https://www.business-standard.com/rss/latest.rss'
  ];

  toggleView() {
    this.isListView = !this.isListView;
    if (this.isListView) {
      this.setListView();
    } else {
      this.setCardView();
    }
  }

  setCardView() {
    this.numCols = this.defaultCols;
    this.rowHeight = this.defaultRowHeight;
    this.gutterSize = this.defaultGutterSize;
  }

  setListView() {
    this.numCols = 1;
    this.rowHeight = this.listViewHeight;
    this.gutterSize = '5';
  }
}
