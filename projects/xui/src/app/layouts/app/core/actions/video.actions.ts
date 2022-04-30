import { createAction, props } from '@ngrx/store';
import { MiniVideoPayload } from '~/app/layouts/lib/models';

export const setVideoSearchQuery = createAction('[HEADER] Set Video Search Query', props<{ payload: string }>());
export const setIsMiniPlayerMode = createAction(
  '[Watch App Wrapper] Set Is Mini Player Mode',
  props<{ payload: boolean }>()
);
export const setMiniPlayerVideo = createAction(
  '[Watch App Wrapper] Set Mini Player Video',
  props<{ payload: MiniVideoPayload }>()
);
