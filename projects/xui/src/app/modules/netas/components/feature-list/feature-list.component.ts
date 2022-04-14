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
  onSelectCard() {
    this.selected = !this.selected;
  }

  ngOnInit() { }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
