// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --configuration production` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'XUI',
  envName: 'DEV',
  production: false,
  test: false,
  i18nPrefix: '',
  apiUrl: 'https://xui-wine.vercel.app/api/',
  firebase: {
    apiKey: "AIzaSyAdKv1ORc84HMOvLjWr6rq4RTcEOjqPh78",
    authDomain: "devx-348322.firebaseapp.com",
    databaseURL: "https://devx-348322-default-rtdb.firebaseio.com",
    projectId: "devx-348322",
    storageBucket: "devx-348322.appspot.com",
    messagingSenderId: "975225617838",
    appId: "1:975225617838:web:2dc594516b09590f859c3f",
    measurementId: "G-WPSSRW0X0K"
  }
};
