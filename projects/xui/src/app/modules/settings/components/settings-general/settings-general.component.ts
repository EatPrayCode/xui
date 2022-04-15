import { UserService } from '../../../../services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { actionSettingsChangeLanguage, actionSettingsChangeTheme, actionSettingsChangeAutoNightMode, actionSettingsChangeStickyHeader, actionSettingsChangeAnimationsPage, actionSettingsChangeAnimationsElements } from '../../../../core/settings/settings.actions';
import { selectSettings } from '../../../../core/settings/settings.selectors';
import { AppService } from '../../../../services/app.service';

import { getAuth } from "firebase/auth";
import { State } from '../../../../core/settings/settings.model';


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
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
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
    this.settings$.subscribe(res1 => {
      const auth = getAuth();
      const user = auth.currentUser; // null if no user
      this.userservice.setUserSettingsTestUid(user.uid, res1);
    });
  }
}
