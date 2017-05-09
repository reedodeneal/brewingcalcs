exports.bigness = function(originalGravity) {
  return 1.65 * Math.pow(0.000125, (originalGravity - 1))
}

// boilTime (float): expressed in mininutes
exports.boilTimeFactor = function(time) {
  return (1 - Math.pow(Math.E, (-0.04 * time))) / 4.15
}

// originalGravity(float): original gravity of the recipe
// hopTime (float) : time the hop will be added in minutes
// hopType (string): 'pellet', 'plug', or nothing at all
exports.utilization = function(originalGravity, hopTime, hopType) {
  var utilization = this.boilTimeFactor(hopTime) * this.bigness(originalGravity)
  switch(hopType) {
    case 'pellet':
      utilization += (utilization * 0.1)
      break;
    case 'plug':
      utilization += (utilization * 0.08)
      break;
  }
  return utilization
}

// hopWeight (float): expressed in ounces
// hopAlphaAcid (float): expressed as a percentage (e.g. 6.5)
exports.aau = function(hopWeight, hopAlphaAcid) {
  return hopWeight * hopAlphaAcid
}

// hopWeight (float): weight in ounces
// hopAlphaAcid (float): alpha acid expressed as a percent (e.g. 6.5)
// hopTime (float) : time the hop will be added in minutes
// recipeVolume (float): recipe volume in gallons
// originalGravity(float): original gravity of the recipe
// hopType (string): 'pellet', 'plug', or nothing at all
exports.ibuTinseth = function(hopWeight, hopAlphaAcid, hopTime, recipeVolume, originalGravity, hopType) {
  var bigness = this.bigness(originalGravity)
  var boilTimeFactor = this.boilTimeFactor(hopTime)
  var utilization = this.utilization(originalGravity, hopTime, hopType)
  var aau = this.aau(hopWeight, hopAlphaAcid)
  return (aau * utilization * 75) / recipeVolume
}
