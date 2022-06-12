import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class DataService {


	constructor(
		private firestore: Firestore
	) {}

	apiURL = 'sampleurl';

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	getSettings() {
		const db = collection(this.firestore, 'sitesettings');
		const settings$ = collectionData(db) as Observable<any[]>;
		return settings$;
	}

	responseHandlerFn(payload: any, data: any) {
		return data;
	}

	handleError(error: { error: { message: string; }; status: any; message: any; }) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		}
		else {
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		return throwError(errorMessage);
	}

}