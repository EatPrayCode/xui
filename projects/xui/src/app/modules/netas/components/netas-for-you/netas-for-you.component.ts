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
import { startWith } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  selector: 'app-netas-for-you',
  templateUrl: './netas-for-you.component.html',
  styleUrls: ['./netas-for-you.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasForYouComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  userForm: FormGroup = new FormGroup({});
  users$: Observable<any[]> | undefined;
  isEdit$: Observable<{ value: boolean }> | undefined;

  mainLinksItems: any = [
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100z'
    },
    {
      name: 'Prefilled500',
      type: 'swiggy',
      class: 'swiggy-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 500,
      id: '500p'
    },
    {
      name: 'Prefilled1000',
      type: 'flipkart',
      class: 'flipkart-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 1000,
      id: '1000n'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100b'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100a'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100x'
    }
  ];

  selectedType: any;
  allNetas$: Observable<any> = of([]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // public dataService: DataService
  ) {}

  handleViewNetaDetails($event: any) {
    this.router.navigate(['/defaultId']);
  }

  ngOnInit() {
    // this.allNetas$ = this.dataService.getAllNetas({});
  }

  handleMessageOptionClick(event: any) {
    let msgTyp = event.value;
    console.log(event);
    this.selectedType = event;
  }

  handleMessageNeta($event: any) {
    this.router.navigate(['/connect/connect-new']);
  }
}
