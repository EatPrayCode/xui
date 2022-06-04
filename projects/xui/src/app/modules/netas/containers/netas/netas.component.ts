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
  selector: 'app-netas',
  templateUrl: './netas.component.html',
  styleUrls: ['./netas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>,
    private changeDetector: ChangeDetectorRef
  ) { }

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
  mainMenuItems: any = [
    {
      id: 'netas-for-you',
      link: 'netas-for-you',
      name: 'you',
      label: 'app.netas.tab.netas-for-you'
    },

    {
      id: 'netas-by-state',
      link: 'netas-by-state',
      name: 'State',
      label: 'app.netas.tab.netas-by-state'
    },
    {
      link: 'netas-national',
      name: 'National',
      label: 'app.netas.tab.netas-national'
    }
  ];
 

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

}
