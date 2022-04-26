import { HttpClient } from '@angular/common/http';
import { tap, take, delay } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LocalStorageService, AppState, selectSettingsStickyHeader, selectSettingsLanguage, selectEffectiveTheme } from "../core/core.module";
import { actionInitialiseSettings, actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeLanguage } from "../core/settings/settings.actions";
import browser from 'browser-detect';
import { BehaviorSubject, Observable, of } from "rxjs";
import { FirebaseAuthService } from "./firebase-auth.service";
import { appState, appStateFirebaseNull } from "../models/app.state";
import { environment as env } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;
  appSettingsSubject: BehaviorSubject<any> = new BehaviorSubject<appState>(appStateFirebaseNull);
  configUrl = env.apiUrl;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private firebaseAuth: FirebaseAuthService,
    private http: HttpClient
  ) {
    this.getConfig();
  }

  initAppService() {
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.testLocalStorage();
    this.initializeAnimations();
  }

  testLocalStorage() {
    this.storageService.testLocalStorage();
  }

  initializeAnimations() {
    if (AppService.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
  }

  getConfig() {
    this.appSettingsSubject.pipe(
      tap(),
      take(2)
    ).subscribe((res: any) => {
      if (res.uid) {
        this.loadUserSettingsFromFirebase(res).subscribe(res => {

        });
      }
    });
  }

  loadUserSettingsFromFirebase(payload: any): Observable<any> {
    const { uid } = payload;
    const url = `${this.configUrl}?uid=${uid}`;
    return this.http.get<any>(url);
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  onLanguageSelect(language) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: language })
    );
  }

  signInAnonymously() {
    return this.firebaseAuth.signInAnonymously();
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithGoogle();
  }

  signInPassword(email, password) {
    return this.firebaseAuth.signInWithPassword(email, password);
  }

  registerWithPassword(email, password) {
    return this.firebaseAuth.registerWithPassword(email, password);
  }

  logout(): void {
    this.firebaseAuth.logout();
    this.appSettingsSubject.next(appStateFirebaseNull);
  }

}
