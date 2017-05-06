var test = require('tap').test
var abv = require('../dist/calcs/abv').default

test('abv', function (t) {
  t.equal(abv(1.0681, 1.01768), 6.605020000000017, 'abv')
  t.end()
})
