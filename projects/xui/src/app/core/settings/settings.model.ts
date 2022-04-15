import { AppState } from '../core.module';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'telugu' | 'kannada' | 'malayalam' | 'kannada';

export interface SettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
  customSettings: any;
  netaPreferences: any;
}

export interface State extends AppState {
  settings: SettingsState;
}
