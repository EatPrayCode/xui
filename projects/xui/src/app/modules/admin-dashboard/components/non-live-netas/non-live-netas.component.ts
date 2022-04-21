import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Airtable, Base } from 'ngx-airtable';

@Component({
  selector: 'app-non-live-netas',
  templateUrl: './non-live-netas.component.html',
  styleUrls: ['./non-live-netas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonLiveNetasComponent implements OnInit {

  nonLiveNetas$: any = of([])

  constructor(private _airtable: Airtable) {
    const base: Base = this._airtable
      .base('app0blxbqN1rHDD24');
    this.nonLiveNetas$ = base.table({
      tableId: 'tblL0z0AtzG8d5OWG'
    }).select({ maxRecords: 10 })
      .firstPage().pipe(tap(res=>{
        console.log(res);
      }));
  }

  ngOnInit(): void {
  }

}
