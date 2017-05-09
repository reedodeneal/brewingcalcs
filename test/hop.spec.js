var test = require('tap').test
var hop = require('../dist/calcs/hop')

test('hop', function (t) {
  t.equal(hop.bigness(1.066), 0.911758886908987, 'bigness')
  t.equal(hop.boilTimeFactor(45), 0.20113279801889478, 'boil time factor')
  t.equal(hop.utilization(1.066, 45, 'pellet'), 0.20172307764685735, 'utilization')
  t.equal(hop.aau(3, 5.5), 16.5, 'aau')

  t.equal(hop.ibu(3, 5.5, 45, 5, 1.066), 45.3876924705429, 'IBU')
  t.equal(hop.ibu(3, 5.5, 45, 5, 1.066, 'plug'), 49.018707868186326, 'IBU')
  t.equal(hop.ibu(3, 5.5, 45, 5, 1.066, 'pellet'), 49.92646171759719, 'IBU')
  t.end()
})
