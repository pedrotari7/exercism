export function makeDiamond(character: string): string {
  if (character === 'A') return 'A\n'

  const s: string[] = []

  const A = 'A'.charCodeAt(0)
  const size = character.charCodeAt(0) - A + 1

  const start: string[] = []
  const end: string[] = []

  for (let i = 1; i < size - 1; i++) {
    const letter = String.fromCharCode(A + i)
    const pad = ''.padEnd(size - i - 1, ' ')
    const center = ''.padEnd(2 * i - 1, ' ')

    start.push(pad + letter + center + letter + pad)
  }

  const A_row = ''.padEnd(size - 1, ' ') + 'A' + ''.padEnd(size - 1, ' ')

  return (
    [
      A_row,
      [...start].join('\n'),
      character + ' '.padEnd(2 * (size - 1) - 1) + character,
      [...start].reverse().join('\n'),
      A_row,
    ].join('\n') + '\n'
  )
}
