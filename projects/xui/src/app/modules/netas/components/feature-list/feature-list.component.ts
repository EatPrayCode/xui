import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaListComponentV1 implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @Input() features: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  @Output() viewNeta: EventEmitter<any> = new EventEmitter<any>();

  selected = false;

  constructor() { }

  onSelectCard() {
    this.selected = !this.selected;
  }

  ngOnInit() { }

  onViewNeta(event: any) {
    this.viewNeta.next(event);
  }


}
