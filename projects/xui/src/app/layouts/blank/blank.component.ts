import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  public isMiniPlayerMode$?: Observable<boolean>;
  constructor() {}

  ngOnInit(): void {}
}
