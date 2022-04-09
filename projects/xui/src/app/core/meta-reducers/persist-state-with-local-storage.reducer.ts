import { actionSettingsChangeLanguage } from '../settings/settings.actions';
import { ofType } from '@ngrx/effects';
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { AppState } from '../core.state';

export function persistStateReducer(_reducer: ActionReducer<AppState>) {
  const localStorageKey = 'settingsNeta';
  return (state: AppState | undefined, action: any) => {
    // console.log(action.ofType(actionSettingsChangeLanguage));
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state, action);
    }
    const nextState = _reducer(state, action);
    // console.log(action);
    LocalStorageService.persistState(
      localStorageKey,
      JSON.stringify(nextState)
    );
    return nextState;
  };
}
