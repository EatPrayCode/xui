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

export const appStateFirebaseSample: appState = {
  uid: 'tNxAZbKtgdfxqilfUyivKz0hzDj1',
  isAnonymous: false,
  customSettingsEnabled: true,
  userSettings: {
    theme: 'light',
    timeZone: 'IST',
    location: {
      pin: ''
    }
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

export class userSettings {
  theme: any;
  timeZone: any;
  location: any
}

export const userSettingsAnonymous: userSettings = {
  theme: '',
  timeZone: '',
  location: {}
};

export const userSettingsNull: userSettings = {
  theme: null,
  timeZone: null,
  location: null
};

export const userSettingsSample: userSettings = {
  theme: 'light',
  timeZone: 'IST',
  location: {
    pin: ''
  }
};
