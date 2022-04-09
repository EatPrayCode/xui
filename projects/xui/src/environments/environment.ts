// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --configuration production` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'Angular Ngrx Material Starter',
  envName: 'DEV',
  production: false,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress'],
    eslint: packageJson.devDependencies['eslint']
  },
  firebase: {
    apiKey: 'AIzaSyBftNmBTAU9tOJIJY82wftmLWmftwxqRJs',
    authDomain: 'projectx-dev-92d22.firebaseapp.com',
    projectId: 'projectx-dev-92d22',
    storageBucket: 'projectx-dev-92d22.appspot.com',
    messagingSenderId: '156981973074',
    appId: '1:156981973074:web:8198c99eb27345b294cf8b',
    measurementId: 'G-7VTSSVMG4D'
  }
};
