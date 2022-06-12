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
  'callBackAPI': 'cma62936641cb63e',
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
  redirectUrl: "http://localhost:3000/home/authenticate", //replace
  scope: "account edit flair history identity mysubreddits read report save submit subscribe vote wikiread",
  newsapi: {
    API_KEY: '1b6ebad4ea2e433dbe0f4ce3521ff563'
  },
  _commerceApi: 'pk_test_439791ba01c9da0eaa82b3b0f5cae56e9b244ba23bf87',
  notionApi: 'secret_jdRAqexTp7xN5VheluF8qNAiPYuy5MhYUGfMNpyF6Xc',
  twitter: {
    APIKey: '1ewWjG1fLVZIjVkAquKHuRiae',
    APISecret: '8g3ASsQ4rw5yWix50CTYxXsYErO3GoSp1Cj4MHH85SWqI5tghy',
    BearerToken: 'AAAAAAAAAAAAAAAAAAAAAMBIdgEAAAAAG2J%2Be950rUdUmUytsRqZ9ZJhgqo%3DarwV1lHSVmVJ8P3HGcc4vKNBceXMNcoo3YPjRDsqWEe0LTqoJm',
    AccessToken: '1524896935651721216-ON5BAUTQguqXW8vRNIczbEk7MFtgGq',
    AccessSecret: 'LLEZfnwa54yIYWWgqNVtL1LKvvI7deOOFf9mX5YRpEYOf',
    APPID: 24529088
  }
};
