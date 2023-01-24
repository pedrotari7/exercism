export function toRna(rna: string) {
  const m: Record<string, string> = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  }

  return rna
    .split('')
    .map((a) => {
      if (Object.keys(m).includes(a)) return m[a]
      throw new Error('Invalid input DNA.')
    })
    .join('')
}
