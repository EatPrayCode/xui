import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-connect-home',
  templateUrl: './connect-home.component.html',
  styleUrls: ['./connect-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
