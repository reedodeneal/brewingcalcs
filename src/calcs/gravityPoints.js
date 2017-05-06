var convert = require('convert-units')

// Describes the actual amount of sugar in your beer
// targetVolume is in liters
exports.gravityPoints = function(originalGravity, targetVolume) {
  return (originalGravity - 1) * 1000 * targetVolume
}

exports.yieldToPPG = function(y) {
  return 46 * y / 100
}

exports.litersToGallons = function(liters) {
  return convert(liters).from('l').to('gal')
}

exports.gallonsToLiters = function(gallons) {
  return convert(gallons).from('gal').to('l')
}

exports.ppgToYield = function(ppg) {
  return ppg / 46 * 100
}

exports.targetVolume = function(originalGravity, gravityPoints) {
  return gravityPoints / (1000 * (originalGravity - 1))
}

// Points per Pound per Gallon to Points per Kilogram per Liter
exports.ppgToPKGL = function(ppg) {
  return ppg * 8.345
}

exports.weightKG = function(gravityPoints, pkgl, efficiency) {
  return gravityPoints / (pkgl * efficiency * 384)
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

exports.hopBigness = function(originalGravity) {
  return 1.65 * Math.pow(0.000125, (originalGravity - 1))
}

// boilTime: min
exports.hopBoilTimeFactor = function(boilTime) {
  return (1 - Math.pow(Math.E, (-0.04 * boilTime))) / 4.15
}

exports.hopUtilization = function(originalGravity, boilTime) {
  return this.hopBoilTimeFactor(boilTime) * this.hopBigness(originalGravity)
}

// hopWeight : oz
// hopAlphaAcid : % (e.g. 6.5)
exports.aau = function(hopWeight, hopAlphaAcid) {
  return hopWeight * hopAlphaAcid
}

// hopWeight : oz
// hopAlphaAcid : % (e.g. 6.5)
// hopBoilTime : min
// recipeVolume : gal
// hopType : string
exports.ibu = function(hopWeight, hopAlphaAcid, hopBoilTime, recipeVolume, originalGravity, hopType) {
  var bigness = this.hopBigness(originalGravity)
  var boilTimeFactor = this.hopBoilTimeFactor(hopBoilTime)
  var utilization = this.hopUtilization(originalGravity, hopBoilTime)
  var aau = this.aau(hopWeight, hopAlphaAcid)
  switch(hopType) {
    case 'pellet':
      utilization += (utilization * 0.1)
      break;
    case 'plug':
      utilization += (utilization * 0.08)
      break;
  }
  console.log('Bigness: ' + bigness)
  console.log('Boil Time Factor: ' + boilTimeFactor)
  console.log('Utilization: ' + utilization)
  console.log('AAU: ' + aau)
  return (aau * utilization * 75) / recipeVolume
}

exports.ozToLb = function(ounces) {
  return convert(ounces).From('oz').To('lb')
}

exports.lbToOz = function(pounds) {
  return convert(ounces).From('lb').To('oz')
}
