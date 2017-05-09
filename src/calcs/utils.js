var convert = require('convert-units')

exports.targetVolume = function(originalGravity, gravityPoints) {
  return gravityPoints / (1000 * (originalGravity - 1))
}

exports.startingWaterVolume = function(targetBatchSize, lossToGrain, lossToEvaporation, lossToHops) {
  return targetBatchSize + lossToGrain + lossToEvaporation + lossToHops
}
exports.lossToEvaporation = function(time, evaportationRate) {
  return time * evaporationRate
}

exports.lossToGrain = function(weight, absorptionRate) {
  return weight * absorptionRate
}

exports.absorptionRate = function(startingVolume, endingVolume, time) {
  return (startingVolume - endingVolume ) / time
}

exports.absorptionPercentage = function(startingVolume, endingVolume, time) {
  return 100 - (((startingVolume - endingVolume) / time) / startingVolume * 100)
}

// if volume is in gallons and time is in hours the result is X gallons/hr
exports.evaporationRate = function(preBoilVolume, postBoilVolume, time) {
  return (preBoilVolume - postBoilVolume) / time
}

exports.evaporationPercentage = function(preBoilVolume, postBoilVolume, time) {
  return 100 - (((preBoilVolume - postBoilVolume) / time) / preBoilVolume * 100)
}

exports.weightKG = function(gravityPoints, pkgl, efficiency) {
  return gravityPoints / (pkgl * efficiency * 384)
}

exports.ozToLb = function(ounces) {
  return convert(ounces).From('oz').To('lb')
}

exports.lbToOz = function(pounds) {
  return convert(ounces).From('lb').To('oz')
}

exports.litersToGallons = function(liters) {
  return convert(liters).from('l').to('gal')
}

exports.gallonsToLiters = function(gallons) {
  return convert(gallons).from('gal').to('l')
}
