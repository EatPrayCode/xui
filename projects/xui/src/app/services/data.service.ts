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

	getAllNetas(payload: any) {
		// return this.afs.collection('/netas').snapshotChanges().pipe(
		// 	delay(1000),
		// 	map((changes: any) => {
		// 		// return this.responseHandlerFn(payload, changes);
		// 		return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
		// 			const data = a.payload.doc.data();
		// 			(<any>data).id = a.payload.doc.id;
		// 			return data;
		// 		});
		// 	}),
		// 	tap((res: any) => {
		// 		console.log('Netas', res);
		// 	})
		// );
		return of([{}, {}])
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