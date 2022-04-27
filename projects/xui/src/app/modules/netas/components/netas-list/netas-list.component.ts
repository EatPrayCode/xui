import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  selector: 'app-netas-list',
  templateUrl: './netas-list.component.html',
  styleUrls: ['./netas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasListComponent implements OnInit, OnChanges {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @Input() netasList: any[] = [];
  @Output() viewNeta: EventEmitter<any> = new EventEmitter<any>();

  selected: any = false;

  constructor() { }

  onSelectCard() {
    this.selected = !this.selected;
  }

  ngOnInit() { }

  onViewNeta(event: any) {
    this.viewNeta.next(event);
  }

  handleClickSubTab(e) {

  }

  ngOnChanges(changes: SimpleChanges) {
    const netasList: any = changes.netasList.currentValue || [];
  }

}
