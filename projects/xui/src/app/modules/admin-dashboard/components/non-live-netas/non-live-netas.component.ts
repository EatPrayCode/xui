import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Airtable, Base } from 'ngx-airtable';

import { from, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { TransferState } from '@angular/platform-browser';
import { traceUntilFirst } from '@angular/fire/performance';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { keepUnstableUntilFirst } from '@angular/fire';

const TRANSPARENT_PNG
  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

@Component({
  selector: 'app-non-live-netas',
  templateUrl: './non-live-netas.component.html',
  styleUrls: ['./non-live-netas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonLiveNetasComponent implements OnInit {

  nonLiveNetas$: any = of([]);
  public readonly downloadUrl$: Observable<string>;

  constructor(
    private _airtable: Airtable,
    storage: Storage
  ) {
    const icon = ref(storage, 'admin-uploads/aypqssti.png');
    this.downloadUrl$ = from(getDownloadURL(icon)).pipe(
      keepUnstableUntilFirst,
      traceUntilFirst('storage'),
      startWith(TRANSPARENT_PNG),
    );
    const base: Base = this._airtable
      .base('app0blxbqN1rHDD24');
    this.nonLiveNetas$ = base.table({
      tableId: 'tblL0z0AtzG8d5OWG'
    }).select({ maxRecords: 10 })
      .firstPage().pipe(tap(res => {
        console.log(res);
      }));
  }

  ngOnInit(): void {
  }

}
