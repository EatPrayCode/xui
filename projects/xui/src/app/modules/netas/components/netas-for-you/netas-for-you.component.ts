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
import { UserService } from 'projects/xui/src/app/services/user.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public userService: UserService,
  ) { }

  handleViewNetaDetails($event: any) { }

  handleGoToNeta(event) {
    const netaName: any = event.netaid;
    this.router.navigate([`${netaName}`]);
  }

  ngOnInit() {
    this.loading = true;
    this.allNetas$ = this.userService.getAllNetas().pipe(tap(res => {
      this.loading = false;
    }));
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
}
