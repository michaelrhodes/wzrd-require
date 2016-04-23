# wzrd-require

This module lets you dynamically require standalone modules from [browserify-cdn](https://wzrd.in) without polluting your global scope. It is a simple wrapper around [iso-global](https://github.com/michaelrhodes/iso-global) that manages the `script-src` and `object-name` arguments for you.

** The [tests](#running-the-tests) should pass in all browsers, even IE 6 and friends! **

## Install

```sh
$ npm install wzrd-require
```

## Usage

```js
var wzrd = require('wzrd-require')
var provinces = wzrd('provinces@0.0.0')

provinces(function (list) {
  var canadian = list.filter(function (province) {
    return province.country === 'CA'
  }).map(function (province) {
    return province.name
  })
  console.log(canadian)
  > ['Alberta', 'British Columbia', ...]
})
```

If you host your own version of the CDN you can configure `wzrd-require` like so:

```js
var wzrd = require('wzrd-require')({
  root: 'http://self-hosted.cdn/standalone'
})
```

### Page weight

`require('wzrd-require')`

| compression            |    size |
| :--------------------- | ------: |
| wzrd-require.js        | 6.31 kB |
| wzrd-require.min.js    | 2.99 kB |
| wzrd-require.min.js.gz |  1.4 kB |


### Running the tests

Until [testling](https://ci.testling.com/) comes back (or is replaced by something elegant) you can run the tests yourself in any browser:

```sh
$ git clone git@github.com:michaelrhodes/wzrd-require
$ cd wzrd-require
$ npm install
$ npm test
```

#### License

[MIT](http://opensource.org/licenses/MIT)
