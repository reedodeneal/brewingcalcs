export default function finalGravity(originalGravity, attenuation) {
  return originalGravity - (originalGravity - 1) * attenuation
}
