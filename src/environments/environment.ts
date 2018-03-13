// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase  : {
    apiKey: "AIzaSyASImqck2NM9dhykLsqbW6-uKJksdpjYps",
    authDomain: "estudiemosaportes.firebaseapp.com",
    databaseURL: "https://estudiemosaportes.firebaseio.com",
    projectId: "estudiemosaportes",
    storageBucket: "estudiemosaportes.appspot.com",
    messagingSenderId: "678538706267"
  }
};
