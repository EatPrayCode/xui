export class appState {
  uid: string;
  customSettingsEnabled: boolean;
  isAnonymous: boolean;
  userSettings: userSettings;
}

export const appStateFirebaseNull: appState = {
  uid: '',
  isAnonymous: false,
  customSettingsEnabled: false,
  userSettings: null
};
export class userSettings {
  theme: any;
  timeZone: any;
  location: any
}

export const userSettingsNull: userSettings = {
  theme: null,
  timeZone: null,
  location: null
};

