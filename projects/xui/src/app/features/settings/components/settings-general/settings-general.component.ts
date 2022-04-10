import { userSettings } from './../../../../models/app.state';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { actionSettingsChangeLanguage, actionSettingsChangeTheme, actionSettingsChangeAutoNightMode, actionSettingsChangeStickyHeader, actionSettingsChangeAnimationsPage, actionSettingsChangeAnimationsElements, actionInitialiseSettings } from '../../../../core/settings/settings.actions';
import { SettingsState, State } from '../../../../core/settings/settings.model';
import { selectSettings } from '../../../../core/settings/settings.selectors';
import { AppService } from '../../../../services/app.service';
import { FirebaseAuthService } from '../../../../services/firebase-auth.service';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsGeneralComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  settings$: Observable<any> | undefined;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];

  languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' }
  ];



  constructor(
    private store: Store<State>,
    private firebaseApiService: FirebaseAuthService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
    // this.appService.appSettingsSubject.subscribe(res => {
    //   if (res.dataLoaded) {
    //     this.store.dispatch(
    //       actionInitialiseSettings({ payload: res.userSettings })
    //     );
    //   }
    // });
  }

  onLanguageSelect(change: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: change.value })
    );
  }

  onThemeSelect(event: MatSelectChange) {
    this.store.dispatch(actionSettingsChangeTheme({ theme: event.value }));
  }

  onAutoNightModeToggle(event: MatSlideToggleChange) {
    this.store.dispatch(
      actionSettingsChangeAutoNightMode({ autoNightMode: event.checked })
    );
  }

  onStickyHeaderToggle(event: MatSlideToggleChange) {
    this.store.dispatch(
      actionSettingsChangeStickyHeader({ stickyHeader: event.checked })
    );
  }

  onPageAnimationsToggle(event: MatSlideToggleChange) {
    this.store.dispatch(
      actionSettingsChangeAnimationsPage({ pageAnimations: event.checked })
    );
  }

  onElementsAnimationsToggle(event: MatSlideToggleChange) {
    this.store.dispatch(
      actionSettingsChangeAnimationsElements({
        elementsAnimations: event.checked
      })
    );
  }

  save() {
    this.settings$.subscribe(res => {
      this.firebaseApiService.test(res);
    });
  }
}
