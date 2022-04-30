import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { MiniVideoPayload } from '~/app/layouts/lib/models';
import { selectIsMiniPlayerMode, selectMiniPlayerVideo, selectVideoSearchQuery } from '../../../reducers';
import { VideoActions } from '../../actions';

@Injectable({ providedIn: 'root' })
export class VideoStoreService {
  constructor(private store: Store) {}

  public setSearchQuery(query: any): void {
    this.store.dispatch(VideoActions.setVideoSearchQuery({ payload: query }));
  }

  public selectSearchQuery() {
    return this.store.select(selectVideoSearchQuery);
  }

  public setIsMiniPlayerMode(isEnabled: boolean): void {
    this.store.dispatch(VideoActions.setIsMiniPlayerMode({ payload: isEnabled }));
  }

  public selectIsMiniPlayerMode(): Observable<boolean> {
    return this.store.select(selectIsMiniPlayerMode);
  }

  public setMiniPlayerVideo(payload: MiniVideoPayload): void {
    this.store.dispatch(VideoActions.setMiniPlayerVideo({ payload }));
  }

  public selectMiniPlayerVideo(): Observable<MiniVideoPayload> {
    return this.store.select(selectMiniPlayerVideo);
  }
}
