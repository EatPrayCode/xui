const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'XUI',
  envName: 'PROD',
  production: true,
  test: true,
  i18nPrefix: '',
  youtubeApiKey: 'AIzaSyCXeDGTeWD9-gVZY6VWoRPLW0LOT0yn_Es',
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
  },
  backendUrl: 'https://youtube-webapp-341311.uc.r.appspot.com',
  youtube: {
    API_KEY: 'AIzaSyB9cgwdwPyk6RcTNr86pZ1t-NqxL-EzNe4',
    CLIENT_ID: '1069808725321-ddmbteo8n53rga47jnv0dlliv66comsi.apps.googleusercontent.com',
    TOTAL_API_RESULTS: '20'
  },
  subredditLimit: 25,
  clientId: "bnNPwXE9nKJanjYmh4sIHg",
  authorizationType: "authorization_code",
  refreshType: "refresh_token",
  tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
  secret: 'dUf7tRSpTTv1G_mumLopvBzAVjTvJg',
  redirectUrl: "https://reddit-sharp.vercel.app/twitter-content/authenticate", //replace
  scope:
    "account edit flair history identity mysubreddits read report save submit subscribe vote wikiread"
};
