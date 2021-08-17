# Angular unit-test using `Jest` and `Angular-Testing-Library`

## Install Angular

```js
npm i -g @angular/cli
ng new angular-test-app
cd angular-test-app
ng serve --open
```

## Install Angular-Testing-Library

```js
npm i --save-dev @testing-library/angular @testing-library/jest-dom
```

## Install Jest and Setting up Jest

```js
// Install the needed dependencies
npm i jest @types/jest jest-preset-angular --save-dev

// or
yarn add jest jest-preset-angular @types/jest --dev
```

## Uninstall Karma

```js
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter

// or
yarn remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
```

### Remove karma configuraion file

```js
rm karma.conf.js
```


### Remove test from `angular.json`

> Remove the test section from angular.json, this section looks like the following:

```js
// angular.json
"test": {
       "builder": "@angular-devkit/build-angular:karma",
       "options": {
         "main": "src/test.ts",
         "polyfills": "src/polyfills.ts",
         "tsConfig": "tsconfig.spec.json",
         "karmaConfig": "karma.conf.js",
         "assets": [
           "src/favicon.ico",
           "src/assets"
         ],
         "styles": [
           "src/styles.scss"
         ],
         "scripts": []
       }
     },
// REMOVE ALL "test" section
```

### Remove files: `karma.conf.js` and `src/test.ts`


## Create file: `setupJest.ts`

> and Add to this file should have the following:

```js
// setupJest.ts
import 'jest-preset-angular';
import 'jest-preset-angular/setup-jest';
```

## Modify file: `tsconfig.spec.json`

```js
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest",
      "node",
      "@testing-library/jest-dom"
    ],
    "esModuleInterop": true,
    "emitDecoratorMetadata": true
  },
  "files": [
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```


## Modify file: `package.json`

```js
 "scripts": {
   "test": "jest",
   "test:coverage": "jest --coverage"
 }


## Add to `package.json`

> Add Jest configuration to the end of this file

```js
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setupJest.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/"
    ],
    "globals": {
      "ts-jest": {
        "tsconfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$"
      }
    }
}
```

## Add to: `tsconfig.json`

```js
"compilerOptions": {
  "allowSyntheticDefaultImports": true,
}
```

## Setup Angular-testing-library

```js
// tsconfig.spec.json
// add "@testing-library/jest-dom"
"types": [
  "node",
  "jest",
  "@testing-library/jest-dom"
],
```

## Test Jest

> run the test for: `src/app/app.component.spec.ts`

```js
// run ones
yarn test

// or
npx jest
```

```js
// watch for changes
yarn test --watch
```

```js
// watch only one
yarn test async.component.spec.ts --watch
```

### Coverage

>  the coverage as built-in functionality is generated in ./coverage directory

---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

> I'm a passionately curious Front-end Engineer. I like sharing what I know, and learning what I don't. London, UK.

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLaneseltd</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com
