import { Injectable } from '@angular/core';
import { Observable, Subject, timer, of } from 'rxjs';
import { Firestore, collectionData, collection, addDoc, where, query, getDocs, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import { FileUploadService } from './uploadFile.service';
import { formatDate } from '@angular/common';
import { doc, getDoc, setDoc } from "firebase/firestore"
import { getAuth } from 'firebase/auth';
import { netaAirTable } from '../models/constant';
import { User } from '../models/User.Model';
import { FileUpload } from '../models/FileUpload.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  private user!: User;
  private db: any;
  users$!: Observable<User[]>;
  usersSubject = new Subject<any[]>();

  constructor(
    private utilsService: UtilsService,
    private fileUploadService: FileUploadService,
    private firestore: Firestore
  ) {
    this.db = collection(this.firestore, 'users');
  }

  getPreferences() {
    return of([]);
  }

  getLiveNews() {
    const db = collection(this.firestore, 'siterefresh');
    const news$ = collectionData(db) as Observable<any[]>;
    return news$;
  }

  getSettings() {
		const db = collection(this.firestore, 'sitesettings');
		const settings$ = collectionData(db) as Observable<any[]>;
		return settings$;
	}

  emitUsers() {
    this.usersSubject.next(this.users);
  }

  CheckUserNameValidity(userName: string | null) {
    return new Promise(
      (resolve, reject) => {
        const db = collection(this.firestore, 'usernames');
        const deleteRef = doc(db, userName);
        getDoc(deleteRef).then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data());
          }
          else {
            reject({});
          }
        });
      });
  }

  GetDataByUserName(userName: string | null) {
    return new Promise(
      (resolve, reject) => {
        const db = collection(this.firestore, 'netasapproved');
        const getRef = doc(db, userName);
        getDoc(getRef).then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data());
          }
          else {
            reject({});
          }
        });
      });
  }

  /// Get Single User By Email /// OK
  addUserName(username: string | null, user: any) {
    return new Promise(
      (resolve, reject) => {
        setDoc(doc(this.firestore, "usernames", username), { name: username, netaId: user.uid }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  // test(username) {
  //   const db = collection(this.firestore, 'usernames');
  //   this.utilsService.getDocByKey(db, username).then((doc: any) => {
  //     updateDoc(doc.ref, this.user);
  //   });
  // }

  /// Create User /// OK
  createUserName(userName: any) {
    return new Promise(
      (resolve, reject) => {
        const db = collection(this.firestore, 'usernames');
        const deleteRef = doc(db, 'testUserName');
        getDoc(deleteRef).then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data());
          }
          else {
            reject({});
          }
        });
      });
  }

  /// Get All User /// OK
  getUsers() {
    this.users$ = collectionData(this.db) as Observable<User[]>;
    this.users$.subscribe((users: User[]) => {
      this.users = users;
      this.emitUsers();
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Users Charg??!');
    });
  }

  /// Get Single User /// OK
  getUser(key: string) {
    return new Promise(
      (resolve, reject) => {
        var qry = query(this.db, where("key", "==", key));
        getDocs(qry).then((querySnapshot) => {
          if (querySnapshot) {
            console.log("Document data:", querySnapshot);
            querySnapshot.docs.forEach(element => {
              this.user = element.data() as User;
            });
            resolve(this.user);
          } else {
            //doc.data() will be undefined in this case
            console.error("No such document!");
            reject("No such document!")
          }
        });
      });
  }

  getUserInfo(key) {
    var qry = query(this.db, where("key", "==", key));
    getDocs(qry).then((querySnapshot) => {
      if (querySnapshot) {
        console.log("Document data:", querySnapshot);
        querySnapshot.docs.forEach(element => {
          this.user = element.data() as User;
        });
      } else {
        //doc.data() will be undefined in this case
        console.error("No such document!");
      }
    });
  }

  getUserSettingsTestUid(uid: string | null) {
    return new Promise(
      (resolve, reject) => {
        const getUserSettingsRef = doc(this.db, uid);
        getDoc(getUserSettingsRef).then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data());
          }
          else {
            reject({
              status: 'SETTINGS_NOT_AVAILABLE'
            });
          }
        });
      });
  }

  setUserSettingsTestUid(uid, data) {
    return new Promise(
      (resolve, reject) => {
        const setUserSettingsRef = doc(this.db, uid);
        setDoc(setUserSettingsRef, { settings: data }, { merge: true }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  requestNetaDetailsChange(uid, data) {
    return new Promise(
      (resolve, reject) => {
        setDoc(doc(this.firestore, "netasunapproved", uid), { ...data, uid: uid }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  approveNetaDetailsChange(data) {
    return new Promise(
      (resolve, reject) => {
        const userName = data.username;
        const uid: any = data.uid;
        setDoc(doc(this.firestore, "netasapproved", userName), { ...data, uid, netaid: userName }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  setNetaDetailsUserSettingsObj(data) {
    return new Promise(
      (resolve, reject) => {
        const auth = getAuth();
        const user = auth.currentUser; // null if
        const userName = data.username;
        const uid: any = data.uid;
        setDoc(doc(this.firestore, "users", uid), { ...data, userName }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  setNetaPreferences(data) {
    return new Promise(
      (resolve, reject) => {
        const auth = getAuth();
        const user = auth.currentUser; // null if
        const uid: any = user.uid;
        setDoc(doc(this.firestore, "users", uid), { netapreferences: data }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  getAllNetas() {
    const db = collection(this.firestore, 'netasapproved');
    const contacts$ = collectionData(db) as Observable<any[]>;
    return contacts$;
  }

  getAllNetasUploadedFromAirtable() {
    const db = collection(this.firestore, 'netas-airtable');
    const contacts$ = collectionData(db) as Observable<any[]>;
    return contacts$;
  }

  getNetasNational() {
    const db = collection(this.firestore, 'netasapproved');
    const contacts$ = collectionData(db) as Observable<any[]>;
    return contacts$;
  }

  getNetaInfoSettings(uid) {
    return new Promise(
      (resolve, reject) => {
        const db = collection(this.firestore, 'users');
        const getNetaInfoRef = doc(db, uid);
        getDoc(getNetaInfoRef).then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.data());
          }
          else {
            reject({
              status: 'SETTINGS_NOT_AVAILABLE'
            });
          }
        });
      });
  }

  // saveNetaAirtableToFirebase(obj: any) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       const db = collection(this.firestore, 'netainfoapproved');
  //       addDoc(db, {
  //         ...obj
  //       }).then((querySnapshot) => {
  //         resolve({
  //           status: 'ADDED'
  //         });
  //       }, err => {
  //         reject({
  //           status: 'FAILED'
  //         })
  //       });
  //     });
  // }

  saveNetaAirtableToFirebase(data: netaAirTable) {
    return new Promise(
      (resolve, reject) => {
        const userName = data.netaid;
        setDoc(doc(this.firestore, "netasapproved", userName), { ...data }).then((querySnapshot) => {
          resolve({
            status: 'ADDED'
          });
        }, err => {
          reject({
            status: 'FAILED'
          })
        });
      });
  }

  // getNetaInfoUnApprovedRecords(uid: string | null) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       const getNetaDetailsRef = doc(this.firestore, "netainfononapproved", uid);
  //       getDoc(getNetaDetailsRef).then((snapshot) => {
  //         if (snapshot.exists()) {
  //           resolve(snapshot.data());
  //         }
  //         else {
  //           reject({
  //             status: 'SETTINGS_NOT_AVAILABLE'
  //           });
  //         }
  //       });
  //     });
  // }

  getUnapprovedNetaInfoRecords() {
    const db = collection(this.firestore, 'netasunapproved');
    const contacts$ = collectionData(db) as Observable<any[]>;
    return contacts$;
  }

  /// Get Single User By Email /// OK
  getUserByUid(email: string | null) {
    return new Promise(
      (resolve, reject) => {
        var qry = query(this.db, where("uid", "==", email));
        const deleteRef = doc(this.db, 'users', email);
        getDocs(qry).then((querySnapshot) => {
          if (querySnapshot) {
            console.log("Document data:", querySnapshot);
            querySnapshot.docs.forEach(element => {
              this.user = element.data() as User;
            });
            resolve(this.user);
          } else {
            //doc.data() will be undefined in this case
            console.error("No such document!");
            reject("No such document!")
          }
        });
      });
  }

  /// Create User /// OK
  createUser(user: User) {
    addDoc(this.db, {
      key: this.utilsService.getKey(),
      displayName: user.displayName,
      email: user.email,
      admin: user.admin,
      disabled: user.disabled,
      dateCreation: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
      dateModification: formatDate(new Date(), 'dd/MM/yyyy', 'en')
    });
  }

  /// Update User /// OK
  updateUser(key: string, user: User) {
    // this.user.surname = user.surname;
    // this.user.name = user.name;
    // this.user.adress = user.adress;
    // this.user.zipcode = user.zipcode;
    // this.user.city = user.city;
    // this.user.pictureUrl = user.pictureUrl;
    // this.user.email = user.email;
    // this.user.pictureUrl = user.pictureUrl;
    // this.user.dateModification = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    this.utilsService.getDocByKey(this.db, key).then((doc: any) => {
      updateDoc(doc.ref, this.user);
    });
  }

  updateOffAdmin(user: User) {
    user.admin = false;

    this.utilsService.getDocByKey(this.db, user.key).then((doc: any) => {
      updateDoc(doc.ref, user);
    });
  }

  updateOnAdmin(user: User) {
    user.admin = true;

    this.utilsService.getDocByKey(this.db, user.key).then((doc: any) => {
      updateDoc(doc.ref, user);
    });
  }

  updateOffDisabled(user: User) {
    user.disabled = false;

    this.utilsService.getDocByKey(this.db, user.key).then((doc: any) => {
      updateDoc(doc.ref, user);
    });
  }

  updateOnDisabled(user: User) {
    user.disabled = true;

    this.utilsService.getDocByKey(this.db, user.key).then((doc: any) => {
      updateDoc(doc.ref, user);
    });
  }

  /// Remove User /// OK
  removeUser(user: User) {
    if (user.pictureUrl) {
      this.fileUploadService.getFileUpload(user.pictureUrl).then((fileUpload) => {
        return this.fileUploadService.deleteFile(fileUpload as FileUpload);
      });
    }

    this.utilsService.getDocByKey(this.db, user.key).then((doc: any) => {
      deleteDoc(doc.ref);
    });
  }

  /// Validator Existing DisplayName /// OK
  existingDisplayNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const debounceTime = 10; //milliseconds
      return timer(debounceTime).pipe(switchMap(() => {
        return this.isDisplayNameAvailable(control.value)
          .then(result => result ? null : { "displayNameExists": true });
      }));
    };
  }

  /// Async Validator Existing DisplayName /// OK
  async isDisplayNameAvailable(value: string): Promise<boolean> {
    return getDocs(query(this.db, where("displayName", "==", value)))
      .then((documentSnapshot) => {
        console.log("isDisplayNameAvailable");
        console.log("Value: " + value);
        console.log("documentSnapshot: " + documentSnapshot.empty)

        return documentSnapshot.empty as boolean;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
        return false;
      });
  }

  existingEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const debounceTime = 10; //milliseconds
      return timer(debounceTime).pipe(switchMap(() => {
        return this.isEmailAvailable(control.value)
          .then(result => result ? null : { "emailExists": true });
      }));
    };
  }

  /// Async Validator Existing Email /// OK
  async isEmailAvailable(value: string): Promise<boolean> {
    return getDocs(query(this.db, where("email", "==", value)))
      .then((documentSnapshot) => {
        console.log("isDisplayNameAvailable");
        console.log("Value: " + value);
        console.log("documentSnapshot: " + documentSnapshot.empty)

        return documentSnapshot.empty as boolean;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
        return false;
      });
  }
}