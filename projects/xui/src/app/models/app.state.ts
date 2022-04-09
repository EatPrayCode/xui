export class appState {
  country?: any;
  pinCode?: any;
  pinCodes?: any;
  isPremium?: any;
  customerType?: any;
  customerAccountType?: any;
  isLoggedIn?: any;
  customerDetails?: any;
  customerAddresses?: any;
  categories?: any;
  orderHistory?: any;
  isGuest: boolean;
  uid: any;
}

export const appStateFirebaseNull = {
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
  orderHistory: [],
  uid: '',
  isGuest: true
};

export const appStateFirebaseSample: appState = {
  uid: 'tNxAZbKtgdfxqilfUyivKz0hzDj1',
  country: 'IND',
  pinCode: 'Bangalore',
  isPremium: true,
  customerType: 'B2C',
  customerAccountType: 'customerAccountType',
  isLoggedIn: true,
  customerDetails: {},
  customerAddresses: {
    billing: {},
    shipping: {}
  },
  isGuest: true
};
