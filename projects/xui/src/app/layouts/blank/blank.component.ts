import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
	selector: 'blank',
	templateUrl: './blank.component.html',
	styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

	window: any;

	constructor() { }

	ngOnInit(): void {
	}

}
