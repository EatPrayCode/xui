import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { map } from 'highcharts';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { debounceTime, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
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

  feeds: FeedItem[] = [];
  addFeedMode: boolean = true;
  godMode: boolean = false;
  rawFeedURLs: string = '';
  feedLoading: FeedLoading = {};
  feedError: FeedError = {};
  loading: boolean = true;
  private ngUnsubscribe$ = new Subject<void>();
  private load$ = new Subject<void>();

  identify = (index: number, feed: FeedItem) => feed.id;

  constructor(private dbService: NgxIndexedDBService,
    private coreService: CoreService) {
  }

  get shareIsSuported(): boolean {
    return !!navigator.share;
  }

  addFeeds(rawFeedStrings: string): void {
    this.addFeedMode = true;
    this.rawFeedURLs = '';
    const newFeeds$ = rawFeedStrings
      .split('\n')
      .map(s => s.trim())
      .filter(s => s)
      .filter(s => isValidHttpUrl(s))
      .map(url => this.dbService.add(TABLES.FEEDS, { url }));

    combineLatest(newFeeds$)
      .subscribe(() => this.load$.next());
  }

  refreshFeeds(): void {
    this.loading = true;
    this.feedError = {};
    this.coreService.refreshFeeds(this.feeds)
      .subscribe(() => {
        this.loading = false;
        this.load$.next();
      });
  }

  share(): void {
    navigator.share?.({
      title: 'Stupid RSS',
      text: this.feeds.map(f => f.url).join(' \n'),
      url: location.href,
    }); // share the URL of MDN
  }

  ngOnInit(): void {

    this.setCardView();

    this.coreService.feedLoading$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(feedLoading => {
        this.feedLoading = feedLoading;
        this.load$.next();
      });

    this.coreService.feedError$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(feedError => {
        this.feedError = feedError;
        this.load$.next();
      });

    this.load$
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        debounceTime(DELAY100),
        switchMap(() => this.dbService.getAll(TABLES.FEEDS))
      )
      .subscribe(feeds => {
        this.feeds = cloneDeep(feeds);
      });

    this.load$.next();

    // import from the old version
    try {
      this.addFeeds(importFeedsFromVersion3());
    } catch (error) {
    }
  }

  unregister(): void {
    const result = confirm('Unregister the Service Worker?');
    if (result === true) {
      navigator.serviceWorker?.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
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

  items: any = ['1', '2', '3', '4', '5', '6'];
  itemsNames: any = [
    'https://www.yahoo.com/news/rss',
    'https://lifehacker.com/rss',
    'http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories',
    'http://rss.cnn.com/rss/cnn_topstories.rss',
    'https://www.latimes.com/local/rss2.0.xml',
    'https://cdn.feedcontrol.net/8/1114-wioSIX3uu8MEj.xml'
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
