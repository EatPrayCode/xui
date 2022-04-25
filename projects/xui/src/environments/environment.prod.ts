const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'XUI',
  envName: 'PROD',
  production: true,
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
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free-webfonts'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress'],
    eslint: packageJson.devDependencies['eslint']
  },
  firebase: {
    apiKey: "AIzaSyCtF3dyYH2_V_zsin15e3STpzcCiXKcZNU",
    authDomain: "next-project-x-firebase.firebaseapp.com",
    projectId: "next-project-x-firebase",
    storageBucket: "next-project-x-firebase.appspot.com",
    messagingSenderId: "843693632832",
    appId: "1:843693632832:web:4cfee3907d3efc1dc1dea5",
    measurementId: "G-VWYC52JV9T"
  }
};
