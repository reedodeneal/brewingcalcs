var test = require('tap').test
var gravityPoints = require('../dist/calcs/gravityPoints').default

test('gravityPoints', function (t) {
  t.equal(gravityPoints(1.085, 16), 1359.9999999999995, 'points')
  t.end()
})
