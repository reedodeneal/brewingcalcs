// originalGravity calculates the original gravity based off of:
//   totalGravityPoints (integer): sum of all malt gravity points (e.g. 230)
//   efficiency (float): brewhouse efficiency expressed as a percentage (e.g. 0.75)
//   batchSize (integer/float): batch size of the recipe in gallons
// returns a float (e.g. 1.085)
exports.originalGravity = function(totalGravityPoints, efficiency, batchSizeGals) {
  return ((totalGravityPoints * efficiency) / batchSizeGals / 1000) + 1
}

// finalGravity calculates the final gravity of a beer based on
//   originalGravity (float): the original gravity of the beer (e.g. 1.085)
//   attenuation (float): attenuation expressed as a percentage (e.g. 0.73)
// returns a float (e.g. 1.016)
exports.finalGravity = function(originalGravity, attenuation) {
  return ((originalGravity - 1) * (1 - attenuation)) + 1
}

// points describes the actual amount of sugar in your beer in gravity points
// targetVolume is in liters
exports.pointsFromOG = function(originalGravity, targetVolume) {
  return (originalGravity - 1) * 1000 * targetVolume
}

// quantity (float): expressed in pounds
exports.pointsFromPPG = function(ppg, quantity) {
  return ppg * quantity;
}
