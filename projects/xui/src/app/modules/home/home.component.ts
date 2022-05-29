import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

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

  items = ['1','2','3','4','5','6'];

  constructor() {
    this.setCardView();
  }

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
