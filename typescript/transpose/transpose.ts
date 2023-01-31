export function transpose(m: string[]): string[] {
  const size = Math.max(...m.map((s) => s.length))

  const matrix = m?.map((s) => (size ? s.padEnd(size, ' ').split('') : ['']))
  const flipped = matrix[0]?.map((_, colIndex) => matrix.map((row) => row[colIndex]).join('')) ?? []

  flipped[size - 1] = flipped[size - 1]?.trimEnd()

  return flipped
}
