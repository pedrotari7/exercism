export function commands(n: number): string[] {
  const h = ['wink', 'double blink', 'close your eyes', 'jump']

  const ret = h.map((v, index) => ((n >> index) & 1 ? v : '')).filter(Boolean)

  return (n >> 4) & 1 ? ret.reverse() : ret
}
