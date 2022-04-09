export class appState {
  country?: any;
  pinCode?: any;
  pinCodes?: any;
  isPremium?: any;
  customerType?: any;
  customerAccountType?: any;
  isLoggedIn?: any;
  customerDetails?: any;
  packs?: any;
  customerAddresses?: any;
  categories?: any;
  orderHistory?: any;
  uid?: any;
}

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
  orderHistory: [],
  uid: ''
};
