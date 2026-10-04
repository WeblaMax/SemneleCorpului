export const BPM = 70
export const BEAT_MS = 60000 / BPM // ≈ 857 ms

// „lub-dub": două contracții rapide, apoi pauză. t = fază 0..1 în cadrul unei bătăi.
export function lubDub(t) {
  const g = (c, w) => Math.exp(-(((t - c) / w) ** 2))
  return Math.min(1, g(0.08, 0.045) + 0.65 * g(0.27, 0.05))
}
