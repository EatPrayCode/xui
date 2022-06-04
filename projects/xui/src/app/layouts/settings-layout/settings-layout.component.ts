import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
	selector: 'settings-layout',
	templateUrl: './settings-layout.component.html',
	styleUrls: ['./settings-layout.component.scss']
})
export class SettingsLayoutComponent implements OnInit {

	window: any;

	constructor() { }

	ngOnInit(): void {
	}

}
