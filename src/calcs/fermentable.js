exports.yieldToPPG = function(y) {
  return 46 * y / 100
}

// Points per Pound per Gallon to Points per Kilogram per Liter
exports.ppgToPKGL = function(ppg) {
  return ppg * 8.345
}

exports.ppgToYield = function(ppg) {
  return ppg / 46 * 100
}
