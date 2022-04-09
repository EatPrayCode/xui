import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LocalStorageService, AppState, selectSettingsStickyHeader, selectSettingsLanguage, selectEffectiveTheme } from "../core/core.module";
import { actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeLanguage } from "../core/settings/settings.actions";
import browser from 'browser-detect';
import { Observable, of } from "rxjs";
import { StateService } from "../core/services/state.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;
  user$: Observable<any> | undefined;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    public stateService: StateService
  ) { }

  initAppService(){
    this.isAuthenticated$ = of(false);
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.testLocalStorage();
    this.initializeAnimations();
    this.user$ = this.stateService.getAppUser();
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

  logout(): void {
    this.stateService.logout();
  }

}
