This example is for [karma](http://karma-runner.github.io/) with
[jasmine](http://jasmine.github.io/),
[browserify-shim](https://github.com/thlorenz/browserify-shim),
[phantomjs](http://phantomjs.org/) and some non-commonjs javascript.

## Setup - running the tests
* `npm install`
* `./node_modules/karma/bin/karma start`

## Using karma, jasmine, and browserify-shim in another project
* if you don't have a `package.json`, `npm init` and hit enter until done
* `npm install --save-dev browserify-shim jasmine karma-jasmine karma-browserify karma-phantomjs-launcher phantomjs`
* `jasmine init`
* `karma init`. When it asks, specify the spec dir as `spec/**/*Spec.js`
* in `karma.conf.js` add to the `frameworks` config:

```javascript
// frameworks to use
// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
frameworks: ['browserify', 'jasmine'],
```

* in `karma.conf.js`, add to the `preprocessors`:

```javascript
// preprocess matching files before serving them to the browser
// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
preprocessors: {
  'spec/*Spec.js': ['browserify']
},
```

* add this to `karma.conf.js` as the last key/value set in the config:

```javascript
browserify: {
  // without this it's extremely difficult to debug if a test fails
  debug: true,
  transform: ['browserify-shim']
}
```

* browserify-shim requires your vanilla js to be attached to the window so it
  can find it and browserify it. So in that file `window.whatever = Whatever;`
* now configure browserify-shim so it can browserify your non-commonjs
  javascript. Add this to `package.json`:

```javascript
"browser": {
  "add": "./path/to/my/non-commonjs/javascript.js"
},
"browserify-shim": {
  "./path/to/my/non-commonjs/javascript.js": "mymodulename"
}
```

* *NOTE: if you leave out the "browser" part, it will only work for code outside
a self-invoking function. Maybe there's a better way but this works for now.*
* now you can `var mymodule = require('mymodulename');` in your spec. Write your jasmine spec test and save it in `spec/WhateverSpec.js`
* `karma start` to run your specs and watch for changes.
