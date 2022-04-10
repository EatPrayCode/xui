import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LocalStorageService, AppState, selectSettingsStickyHeader, selectSettingsLanguage, selectEffectiveTheme } from "../core/core.module";
import { actionInitialiseSettings, actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeLanguage } from "../core/settings/settings.actions";
import browser from 'browser-detect';
import { BehaviorSubject, Observable, of } from "rxjs";
import { FirebaseAuthService } from "./firebase-auth.service";
import { appState, appStateFirebaseNull } from "../models/app.state";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;
  appSettingsSubject: BehaviorSubject<appState> = new BehaviorSubject<appState>(appStateFirebaseNull);

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private firebaseAuth: FirebaseAuthService
  ) { }

  initAppService() {
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.testLocalStorage();
    this.initializeAnimations();
    this.getAppUserSettings();
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

  getAppUserSettings() {
    this.firebaseAuth.getAppUserSettings().pipe(tap(res => {
      this.appSettingsSubject.next({ ...res, dataLoaded: true });
      this.store.dispatch(
        actionInitialiseSettings({ payload: res.userSettings })
      );
    })).subscribe();
  }

  logout(): void {
    this.firebaseAuth.logout();
    this.appSettingsSubject.next(appStateFirebaseNull);
  }

}
