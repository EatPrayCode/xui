import { Component, Input, OnInit, OnChanges, HostBinding, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   if (changes.hasOwnProperty(propName)) {
    //     switch (propName) {
    //       case 'myFirstInputParameter': {
    //         this.doSomething(change.currentValue)
    //       }
    //     }
    //   }
    // }
  }


}
