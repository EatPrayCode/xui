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
  youtubeApiKey: 'AIzaSyCXeDGTeWD9-gVZY6VWoRPLW0LOT0yn_Es',
  loadDelay: 1000,
  'callBackAPI' : 'cma62936641cb63e',
  apiUrl: 'https://xui-wine.vercel.app/api/',
  // apiUrl: 'localhost:3000/api/',
  firebase: {
    apiKey: "AIzaSyAdKv1ORc84HMOvLjWr6rq4RTcEOjqPh78",
    authDomain: "devx-348322.firebaseapp.com",
    databaseURL: "https://devx-348322-default-rtdb.firebaseio.com",
    projectId: "devx-348322",
    storageBucket: "devx-348322.appspot.com",
    messagingSenderId: "975225617838",
    appId: "1:975225617838:web:2dc594516b09590f859c3f",
    measurementId: "G-WPSSRW0X0K"
  },
  pocketConsumerKey: '102119-c42207c093d9875d124f349',
  backendUrl: 'https://youtube-webapp-341311.uc.r.appspot.com',
  youtube: {
    API_KEY: 'AIzaSyB9cgwdwPyk6RcTNr86pZ1t-NqxL-EzNe4',
    CLIENT_ID: '1069808725321-ddmbteo8n53rga47jnv0dlliv66comsi.apps.googleusercontent.com',
    TOTAL_API_RESULTS: '20'
  },
  subredditLimit: 25,
  clientId: "9KSVxsy7UtV_lCtgBFcE1w",
  authorizationType: "authorization_code",
  refreshType: "refresh_token",
  tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
  secret: 'jZg9zBuXwH8P6qiwcopBl1d9Av8kgA',
  redirectUrl: "http://localhost:4200/reddit-client/authenticate", //replace
  scope:
    "account edit flair history identity mysubreddits read report save submit subscribe vote wikiread"
};


//TWITTER_API u3bLVQAAAAAA6BRSAAABgLCNobM