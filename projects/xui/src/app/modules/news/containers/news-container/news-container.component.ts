import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {
  ActivatedRoute,
  Router,
  RouterLinkActive,
  Routes
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { State } from '../../../../core/settings/settings.model';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsContainerComponent implements OnInit {


  // isViewInitialized = false;

  navLinks = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>,
    private changeDetector: ChangeDetectorRef
  ) { }

  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  mainMenuItems: any = [
    {
      id: 'news-live',
      link: 'news-live',
      name: 'You',
      label: 'app.netas.tab.netas-for-you'
    },

    {
      id: 'news-extensive',
      link: 'news-extensive',
      name: 'All News',
      label: 'app.netas.tab.news-extensive'
    },
    // {
    //   id: 'netas-party',
    //   link: 'netas-party',
    //   name: 'Party',
    //   label: 'app.netas.tab.netas-party'
    // },
  ];
  selectedType: any;
  HELPERS: any[] = [
    {
      id: '0',
      name: 'Name',
      image:
        'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/06/21/931/524/694940094001_5800293009001_5800284148001-vs.jpg?ve=1&tl=1',
      designation: 'Chief',
      abbr: 'TO',
      description: 'testing data'
    },
    {
      id: '1',
      name: 'Email',
      image:
        'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/06/21/931/524/694940094001_5800293009001_5800284148001-vs.jpg?ve=1&tl=1',
      designation: 'Chief',
      abbr: 'TO',
      description: 'testing data'
    },
    {
      id: '2',
      name: 'Type',
      image:
        'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/06/21/931/524/694940094001_5800293009001_5800284148001-vs.jpg?ve=1&tl=1',
      designation: 'Chief',
      abbr: 'TO',
      description: 'testing data'
    }
  ];

  value = '';

  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`
  }));

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  ngOnInit() {
    this.isAuthenticated$ = of(true);
  }

  ngAfterViewInit() {
    // this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  onSequenceChangeEvent(event: MatTabChangeEvent) {
    // console.log(event.index);
    let link: any = this.mainMenuItems[event.index].link;
    let currentUrl: any = `/news/${link}`;
    this.router.navigate([currentUrl]);
  }

  OnSearch() {
    console.log('OnSearch', this.value);
  }

  OnSearchNext() {
    console.log('OnSearchNext', this.value);
  }

  OnSearchPrevious() {
    console.log('OnSearchPrevious', this.value);
  }

  OnClear() {
    console.log('OnClear');
    this.value = '';
  }
}
