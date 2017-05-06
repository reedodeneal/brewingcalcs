var test = require('tap').test
var originalGravity = require('../dist/calcs/originalGravity').default

test('originalGravity', function (t) {
  t.equal(originalGravity(454, 0.75, 5), 1.0681, 'gravity points')
  t.end()
})
