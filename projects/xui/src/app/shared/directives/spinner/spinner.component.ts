import { Component, Input, OnInit, OnChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input() loading: boolean = true;
  @Input() message: any = 'Please wait...';

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void { }

}
