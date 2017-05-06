export default function originalGravity(totalGravityPoints, efficiency, batchSizeGals) {
  return ((totalGravityPoints * efficiency) / batchSizeGals / 1000) + 1
}
