export default function finalGravity(originalGravity, attenuation) {
  return ((originalGravity - 1) * (1 - attenuation)) + 1
}
