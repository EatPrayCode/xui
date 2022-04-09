import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-allowed',
  templateUrl: './not-allowed.component.html',
  styleUrls: ['./not-allowed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotAllowedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
