export class appState {
  uid: string;
  customSettingsEnabled: boolean;
  isAnonymous: boolean;
  userSettings: any;
}

export const appStateFirebaseNull: appState = {
  uid: '',
  isAnonymous: false,
  customSettingsEnabled: false,
  userSettings: null
};

export const appStateFirebaseSample: appState = {
  uid: 'tNxAZbKtgdfxqilfUyivKz0hzDj1',
  isAnonymous: false,
  customSettingsEnabled: true,
  userSettings: {
    theme: '',
    timeZone: '',
    location: {}
  }
};

export const appStateFirebaseAnonymous: appState = {
  uid: 'tNxAZbKtgdfxqilfUyivKz0hzDj7',
  customSettingsEnabled: false,
  isAnonymous: true,
  userSettings: {
    theme: '',
    timeZone: '',
    location: {}
  }
};