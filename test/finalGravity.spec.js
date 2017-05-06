var test = require('tap').test
var finalGravity = require('../dist/calcs/finalGravity').default

test('finalGravity', function (t) {
  t.equal(finalGravity(1.068, 0.74), 1.01768, 'attenuation')
  t.end()
})
