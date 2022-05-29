import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { map } from 'highcharts';
import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { DataService } from '../../../../services/data.service';
import { UserService } from '~/app/services/user.service';

@Component({
  selector: 'app-netas-for-you',
  templateUrl: './netas-for-you.component.html',
  styleUrls: ['./netas-for-you.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasForYouComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  allNetas$: Observable<any> = of([]);
  features: any[] = [];
  selected = false;
  value = '';
  loading: any = false;

  isAuthenticated$: Observable<boolean> | undefined;

  examples: any = [
    { link: 'Andhra Pradesh', label: 'anms.examples.menu.todos' },
    { link: 'Karnataka', label: 'anms.examples.menu.stocks' },
    { link: 'West Bengal', label: 'anms.examples.menu.theming' },
    { link: 'Kerala', label: 'anms.examples.menu.crud' },
    { link: 'Madhya Pradesh', label: 'anms.examples.menu.crud' },
    { link: 'Uttar Pradesh', label: 'anms.examples.menu.crud' },
    { link: 'Goa', label: 'anms.examples.menu.auth', auth: true }
  ];
  selectedValue = this.examples[0];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public userService: UserService,
  ) {
    this.setCardView();
  }

  ngOnInit() {
    this.loading = true;
    this.allNetas$ = this.userService.getAllNetas().pipe(tap(res => {
      this.loading = false;
    }));
  }

  handleViewNetaDetails($event: any) { }

  handleGoToNeta(event) {
    const netaName: any = event.netaid;
    this.router.navigate([`${netaName}`]);
  }

  handleClickSubTab(e) {

  }

  onSelectCard() {
    this.selected = !this.selected;
  }

  openLink(link: string) {
    window.open(link, '_blank');
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
