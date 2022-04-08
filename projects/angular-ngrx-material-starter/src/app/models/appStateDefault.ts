export const appStateDefault = {
  country: null,
  pinCode: null,
  pinCodes: [],
  isPremium: false,
  customerType: 'B2C',
  customerAccountType: null,
  isLoggedIn: false,
  customerDetails: null,
  packs: [],
  customerAddresses: {
    billing: null,
    shipping: null
  },
  categories: [],
  orderHistory: []
};

export class appState {
  country: any;
  pinCode: any;
  pinCodes: any;
  isPremium: any;
  customerType: any;
  customerAccountType: any;
  isLoggedIn: any;
  customerDetails: any;
  packs: any;
  customerAddresses: any;
  categories: any;
  orderHistory: any;
}

export class locationState {
  country: any;
  pinCode: any;
  pinCodes: any;
  countries: any;
  customerType: any;
}

const countriesDefault = [
  {
    value: 'GLOBAL',
    availablePinCodes: [
      {
        value: '000000',
        name: 'NOPINCODE'
      }
    ],
    name: 'DEFAULT',
    id: 'uWabMvgpIXIVbabW1Mx1'
  }
];

const countries = [
  {
    value: 'IND',
    name: 'India',
    availablePinCodes: [
      {
        value: '583101',
        name: 'Bellary'
      },
      {
        name: 'Bangalore',
        value: '530068'
      },
      {
        value: '500001',
        name: 'Hyderabad'
      }
    ],
    id: 'PLl0OkXQX8YzXbHOFneV'
  },
  {
    value: 'GLOBAL',
    availablePinCodes: [],
    name: 'DEFAULT',
    id: 'uWabMvgpIXIVbabW1Mx1'
  },
  {
    value: 'USA',
    name: 'USA',
    availablePinCodes: [
      {
        value: '676767',
        name: 'Utah'
      },
      {
        name: '876543',
        value: 'Los Angeles'
      },
      {
        value: '500001',
        name: 'Hyderabad'
      }
    ],
    id: 'PLl0OkXQX8YzXbHOFneV'
  }
];

export const locationStateDefault: locationState = {
  country: countriesDefault[0],
  pinCode: countriesDefault[0].availablePinCodes[0],
  pinCodes: [],
  countries: countriesDefault,
  customerType: {
    name: 'B2C',
    value: 'B2C'
  }
};

export const locationStateNull: locationState = {
  country: null,
  pinCode: null,
  pinCodes: null,
  countries: null,
  customerType: {
    name: 'B2C',
    value: 'B2C'
  }
};

export const locationStateFirebaseUser: locationState = {
  country: countries[0],
  pinCode: countries[0].availablePinCodes[1],
  pinCodes: [],
  countries: countries,
  customerType: {
    name: 'B2C',
    value: 'B2C'
  }
};

export const locationStateFirebaseUser1: locationState = {
  country: countries[2],
  pinCode: countries[2].availablePinCodes[0],
  pinCodes: [],
  countries: countries,
  customerType: {
    name: 'B2C',
    value: 'B2C'
  }
};

export class UserState {
  loggedIn: any;
  isAnonymous: any;
  displayName: any;
  email: any;
  emailVerified: any;
  photoURL: any;
  uid: any;
  isPremium: any;
  customerType: any;
  country: any;
  pinCode: any;
}

export const UserStateNull = {
  loggedIn: false,
  isAnonymous: false,
  displayName: '',
  email: '',
  emailVerified: '',
  photoURL: '',
  uid: '',
  isPremium: false,
  customerType: '',
  country: '',
  pinCode: ''
};

// export const UserStateFirebase = {
//     loggedIn: true,
//     isAnonymous: false,
//     "emailVerified": true,
//     "displayName": "Ashwath Bharadwaj",
//     "email": "ashwathb7569@gmail.com",
//     "photoURL": "https://lh3.googleusercontent.com/a-/AOh14Gg5lkvMfbT5dtpwYUMk97d29PJdfpjJDKLecHDn=s96-c",
//     "uid": "hbOCiMdXDaZS6NxJP4ZjRiEfGb82",
//     isPremium: true,
//     customerType: "B2B",
//     country: "IND",
//     pinCode: "58032"
// };

export class appSettingsState {
  uid: any;
  country: any;
  pinCode: any;
  isPremium: any;
  customerType: any;
  customerAccountType: any;
  isLoggedIn: any;
  customerDetails: any;
  customerAddresses: any;
}
