import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { HttpClient } from '@angular/common/http';

import { appState as appSettingsState, appStateFirebaseNull } from '../models/app.state';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  constructor(
    private afAuth: AngularFireAuth,
    private httpClient: HttpClient
  ) {}

  // apiServer = 'http://localhost:3000/api/orders';
  // initialiseuserUrl = 'http://localhost:3000/api/initialiseuser';
  // addressesUrl = 'http://localhost:3000/api/addresses';
  // ordersUrl = 'http://localhost:3000/api/orders';
  // pincodePacksUrl = 'http://localhost:3000/api/pincodepacks';
  // pincodeUrl = 'http://localhost:3000/api/pincodes';
  // countryUrl = 'http://localhost:3000/api/countries';
  // accessClaimsUrl = 'http://localhost:3000/api/accessclaims';
  // userDataUrl = 'http://localhost:3000/api/userdata';
  // appStateUrl = 'http://localhost:3000/api/appstate';
  // packsUrl = 'http://localhost:3000/api/packs';

  apiServer = 'https://xui-api.vercel.app/api/orders';
  initialiseuserUrl = 'https://xui-api.vercel.app/api/initialiseuser';
  addressesUrl = 'https://xui-api.vercel.app/api/addresses';
  ordersUrl = 'https://xui-api.vercel.app/api/orders';
  pincodePacksUrl = 'https://xui-api.vercel.app/api/pincodepacks';
  pincodeUrl = 'https://xui-api.vercel.app/api/pincodes';
  countryUrl = 'https://xui-api.vercel.app/api/countries';
  accessClaimsUrl = 'https://xui-api.vercel.app/api/accessclaims';
  userDataUrl = 'https://xui-api.vercel.app/api/userdata';
  appStateUrl = 'https://xui-api.vercel.app/api/appstate';
  packsUrl = 'https://xui-api.vercel.app/api/packs';

  loadFirebasePacks(payload: any): Observable<any> {
    const queryArray = [
      { name: 'countryId' },
      { name: 'pinId' },
      { name: 'categoryType' }
    ];
    var queryString = '?';
    queryArray.forEach((ele) => {
      const name = ele.name;
      const value = payload[name];
      if (payload[name]) {
        queryString = queryString + name + '=' + value;
      }
    });
    const url = `${this.packsUrl}${queryString}`;
    return this.httpClient.get(url);
  }

  getFirebasePack(payload: any): Observable<any> {
    let { pinCode, packId } = payload;
    packId = 'IqSKuNrWtu6uJtc9556V';
    pinCode = {
      id: 'E0KTgYuOYNgpxFjlglRd'
    };
    const url = `${this.packsUrl}?pinCodeId=${pinCode.id}&packId=${packId}`;
    return this.httpClient.get(url);
  }

  getUserState() {
    return this.afAuth.authState.pipe();
  }

  loadUserSettingsFromFirebase(payload: any): Observable<any> {
    const { uid } = payload;
    const url = `${this.appStateUrl}?uid=${uid}`;
    return this.httpClient.get<appSettingsState>(url);
  }

  saveUserSettingsToFirebase(payload: appSettingsState): Observable<any> {
    const { uid } = payload;
    const url = `${this.appStateUrl}?uid=${uid}`;
    const extraData: appSettingsState = payload;
    if (uid) {
      return this.httpClient.post<appSettingsState>(url, extraData);
    } else {
      return of(appStateFirebaseNull);
    }
  }

  getCountries(): Observable<any> {
    const url = `${this.countryUrl}`;
    return this.httpClient.get(url);
  }

  getZipCode(payload: any): Observable<any> {
    const { latitude, longitude } = payload;
    const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`;
    return this.httpClient.get(url);
  }

  getNews(payload: any): Observable<any> {
    const url: any =
      'https://newsapi.org/v2/everything?q=apple&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=19a57d64c540471e9179b49e413b2d9a';
    return this.httpClient.get(url);
  }

  getPoliticians(payload: any): Observable<any> {
    const url: any =
      'https://cdn.jsdelivr.net/gh/everypolitician/everypolitician-data@829796bc2c9693efb67d39312a22ce674aa4a8b1/data/India/Lok_Sabha/ep-popolo-v1.0.json';
    return this.httpClient.get(url);
  }

  processOrder(order: any): Observable<any> {
    const currentUser: any = this.afAuth.currentUser;
    const { displayName, email, emailVerified, uid } = currentUser;
    order = { ...order, displayName, email, emailVerified };
    const url = `${this.apiServer}?UID=${uid}`;
    return this.httpClient.post(url, order);
  }

  addClaims(currentUser: any): Observable<any> {
    // const currentUser: any = this.afAuth.currentUser;
    const { displayName, email, emailVerified, uid } = currentUser;
    const url = `${this.accessClaimsUrl}?UID=${uid}`;
    const claims = {
      admin: true,
      finance: true,
      marketing: false,
      myCustomClaim: new Date().toDateString()
    };
    return this.httpClient.post(url, claims);
  }

  getPincodesPacks(pincode: any): Observable<any> {
    const url = `${this.pincodePacksUrl}?id=${pincode.id}`;
    return this.httpClient.get(url);
  }

  addPincodesPacks(pincode: any, pack: any): Observable<any> {
    const url = `${this.pincodePacksUrl}`;
    const mockData = pack;
    const payload = {
      pincode: pincode,
      pack: mockData
    };
    return this.httpClient.post(url, payload);
  }

  updatePincodesPacks(pincode: any, pack: any): Observable<any> {
    const url = `${this.pincodePacksUrl}`;
    return this.httpClient.put(url, pincode);
  }

  getPincodes(): Observable<any> {
    const url = `${this.pincodeUrl}`;
    return this.httpClient.get(url);
  }

  addPincodes(pincode: any): Observable<any> {
    const url = `${this.pincodeUrl}`;
    const payload = {
      name: 'pincodeName'
    };
    return this.httpClient.post(url, payload);
  }

  updatePincodes(pincode: any): Observable<any> {
    const url = `${this.pincodeUrl}`;
    return this.httpClient.put(url, pincode);
  }
}
