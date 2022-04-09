import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FirebaseApiService } from './firebase-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public afs: AngularFirestore,
    public router: Router
  ) { }

  apiURL: any = 'sampleurl';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  responseHandlerFn(payload: any, data: any) {
    return data;
  }

  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  groups: any;

  getAllNetas(payload: any) {
    return this.afs
      .collection('/netas')
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map(
            (a: { payload: { doc: { data: () => any; id: any } } }) => {
              const data = a.payload.doc.data();
              (<any>data).id = a.payload.doc.id;
              return data;
            }
          );
        }),
        tap((res: any) => {
          // console.log(res);
        })
      );
  }

  getAllGroups() {
    return this.afs
      .collection('/states')
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map(
            (a: { payload: { doc: { data: () => any; id: any } } }) => {
              const data = a.payload.doc.data();
              (<any>data).id = a.payload.doc.id;
              return data;
            }
          );
        }),
        tap((res: any) => {
          // console.log(res);
        })
      );
  }

  getGroupsByUid(uid: any) {
    return this.afs.collection('/states').valueChanges();
    // return this.afs.collection('/states', (ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => ref.where("created_by", "==", uid))
    // 	.snapshotChanges().pipe(map((changes: any) => {
    // 		return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
    // 			const data = a.payload.doc.data();
    // 			(<any>data).id = a.payload.doc.id;
    // 			return data;
    // 		});
    // 	})
    // 	);
  }

  addNeta(neta: any) {
    return this.afs.collection('netas/').add(neta);
  }

  getDistrictsByStateId(gid: string) {
    return this.afs
      .collection('states/' + gid + '/districts/')
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map(
            (a: { payload: { doc: { data: () => any; id: any } } }) => {
              const data = a.payload.doc.data();
              (<any>data).id = a.payload.doc.id;
              return data;
            }
          );
        }),
        tap((res: any) => {
          // console.log(res);
        })
      );
  }

  getGroupByGroupId(id: string) {
    return this.afs
      .doc('states/' + id)
      .ref.get()
      .then((doc: { exists: any; data: () => any }) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          return doc.data();
        } else {
          console.log('No such document!');
        }
      });
  }

  getConstituenciesByDistrictID(stateId: string, districtId: any) {
    return this.afs
      .collection(
        'states/' + stateId + '/districts/' + districtId + '/constituencies/'
      )
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map(
            (a: { payload: { doc: { data: () => any; id: any } } }) => {
              const data = a.payload.doc.data();
              (<any>data).id = a.payload.doc.id;
              return data;
            }
          );
        }),
        tap((res: any) => {
          // console.log(res);
        })
      );
  }

  getVillagesByConstituencyID(
    stateId: string,
    districtId: any,
    constituencyId: any
  ) {
    return this.afs
      .collection(
        'states/' +
        stateId +
        '/districts/' +
        districtId +
        '/constituencies/' +
        constituencyId +
        '/villages/'
      )
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map(
            (a: { payload: { doc: { data: () => any; id: any } } }) => {
              const data = a.payload.doc.data();
              (<any>data).id = a.payload.doc.id;
              return data;
            }
          );
        }),
        tap((res: any) => {
          // console.log(res);
        })
      );
  }

  addContactWithGroupId(gid: string, contact: any) {
    return this.afs.collection('states/' + gid + '/districts/').add(contact);
  }

  getUserInfoByUid(uid: any) {
    return this.afs.collection('/states').valueChanges();
    // return this.afs.collection('/users', (ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => ref.where("uid", "==", uid))
    // 	.snapshotChanges().pipe(map((changes: any) => {
    // 		return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
    // 			const data = a.payload.doc.data();
    // 			(<any>data).id = a.payload.doc.id;
    // 			return data;
    // 		});
    // 	})
    // 	);
  }

  addUser(user: any) {
    return this.afs.collection('users/').add(user);
  }

  addGroup(group: any) {
    return this.afs.collection('states/').add(group);
  }

  addDistrictWithStateId(gid: string, district: any) {
    return this.afs.collection('states/' + gid + '/districts/').add(district);
  }

  addConstituencyWithStateIdDistrictId(
    gid: string,
    districtId: any,
    constituency: any
  ) {
    return this.afs
      .collection(
        'states/' + gid + '/districts/' + districtId + '/constituencies/'
      )
      .add(constituency);
  }

  addVillageConstituencyIdWithStateIdDistrictId(
    gid: string,
    districtId: any,
    constituencyId: any,
    village: any
  ) {
    return this.afs
      .collection(
        'states/' +
        gid +
        '/districts/' +
        districtId +
        '/constituencies/' +
        constituencyId +
        '/villages/'
      )
      .add(village);
  }

  editGroupWithGroupId(gid: string, group: any) {
    return this.afs.doc('states/' + gid).set(group);
  }

  deleteGroupWithGroupId(gid: string) {
    return this.afs.doc('states/' + gid).delete();
  }

  editContact(gid: string, cid: string, contact: any) {
    return this.afs.doc('states/' + gid + '/districts/' + cid).set(contact);
  }

  deleteContact(gid: string, cid: string) {
    return this.afs.doc('states/' + gid + '/districts/' + cid).delete();
  }
}
