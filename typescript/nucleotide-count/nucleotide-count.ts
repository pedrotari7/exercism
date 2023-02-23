export function nucleotideCounts(s: string): Record<string, number> {
  return s.split('').reduce<Record<string, number>>(
    (count, c) => {
      if (!(c in count)) throw new Error('Invalid nucleotide in strand')
      count[c] += 1
      return count
    },
    { A: 0, C: 0, G: 0, T: 0 }
  )
}
