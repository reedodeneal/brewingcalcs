var test = require('tap').test
var gravity = require('../dist/calcs/gravity')

test('gravity', function (t) {
  t.equal(gravity.originalGravity(454, 0.75, 5), 1.0681, 'original gravity')
  t.equal(gravity.finalGravity(1.068, 0.74), 1.01768, 'final gravity')
  t.equal(gravity.points(1.068, 1), 68.00000000000006, 'gravity points')
  t.end()
})
