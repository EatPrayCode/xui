import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import { persistStateReducer } from './meta-reducers/persist-state-with-local-storage.reducer';
import { Action,  createSelector } from '@ngrx/store';
import * as fromVideo from '../modules/youtube-content/components/app/core/reducers/video.reducer';
import * as fromAccount from '../modules/youtube-content/components/app/core/reducers/account.reducer';
import * as fromSettings from '../modules/youtube-content/components/app/core/reducers/settings.reducer';
import { InjectionToken } from '@angular/core';


export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  router: routerReducer,
  [fromVideo.featureKey]: fromVideo.reducer,
  [fromAccount.featureKey]: fromAccount.reducer
};


// export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
//   factory: () => ({
//     [fromVideo.featureKey]: fromVideo.reducer,
//     [fromAccount.featureKey]: fromAccount.reducer
//   }),
// });

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage,
  persistStateReducer
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  [fromVideo.featureKey]: fromVideo.VideoState;
  [fromAccount.featureKey]: fromAccount.AccountState;
}


// Video state selectors
export const selectVideoState = createFeatureSelector<fromVideo.VideoState>(fromVideo.featureKey);
export const selectVideoSearchQuery = createSelector(selectVideoState, fromVideo.selectSearchQuery);
export const selectIsMiniPlayerMode = createSelector(selectVideoState, fromVideo.selectVideoIsMiniPlayerMode);
export const selectMiniPlayerVideo = createSelector(selectVideoState, fromVideo.selectVideoMiniPlayerVideo);

// Account state selectors
export const selectAccountState = createFeatureSelector<fromAccount.AccountState>(fromAccount.featureKey);
export const selectLikedVideos = createSelector(selectAccountState, fromAccount.selectLikedVideos);
export const selectDislikedVideos = createSelector(selectAccountState, fromAccount.selectDislikedVideos);
export const selectedWatchedVideos = createSelector(selectAccountState, fromAccount.selectedWatchedVideos);
export const selectIsWatchHistoryEnabled = createSelector(selectAccountState, fromAccount.selectIsWatchHistoryEnabled);

// Settings state selectors