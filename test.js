// For old IE
require('bindpolyfill')

var test = require('tape')
var wzrd = require('./')

var tick = '✔︎'

test('it works', function (assert) {
  var lpad = wzrd('left-pad')
  var closest = wzrd('closest-to@0.1.0')
  var dom = wzrd('@motorcycle/dom@1', ['abbr'])

  assert.equal(typeof wzrd, 'function', tick)
  assert.equal(typeof lpad, 'function', tick)
  assert.equal(typeof closest, 'function', tick)
  assert.equal(typeof dom, 'function', tick)
  assert.equal(typeof dom.abbr, 'function', tick)
  assert.equal(typeof dom.base, 'undefined', tick)

  lpad(1, 2, 0, function (padded) {
    assert.equal(padded, '01', tick)

    closest(1, [5,-7,-1,3], function (val) {
      assert.equal(val, -1, tick)
      assert.end()
    })
  })
})
