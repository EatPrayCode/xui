import { appSettingsState } from '../models/appStateDefault';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public tokenKey: string = 'appSettings';

  constructor() {}

  store(content: appSettingsState) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
  }

  retrieve() {
    let storedToken: any = localStorage.getItem(this.tokenKey);
    storedToken = storedToken ? JSON.parse(storedToken) : storedToken;
    // this.clearSettingsHelper();
    return storedToken;
  }

  doesExists() {
    let storedToken: any = localStorage.getItem(this.tokenKey);
    return storedToken ? true : false;
  }

  clearSettingsHelper() {
    localStorage.removeItem(this.tokenKey);
  }

  retrieveAsObservable() {
    let storedToken: any = localStorage.getItem(this.tokenKey);
    storedToken = storedToken ? JSON.parse(storedToken) : storedToken;
    return of(storedToken);
  }
}
