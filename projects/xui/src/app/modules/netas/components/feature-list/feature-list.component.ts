import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaListComponentV1 implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  selected = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSelectCard() {
    this.selected = !this.selected;
  }

  ngOnInit() { }

  onViewNeta(event: any) {
    // console.log(event.index);
    let currentUrl: any = `/sampleneta`;
    this.router.navigate([currentUrl]);
  }


}
