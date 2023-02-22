const n = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
]

export function annotate(field: string[]): string[] {
  const ret: string[] = []
  field.forEach((row, y) => {
    let r = ''
    row.split('').forEach((v, x) => {
      if (v !== '*') {
        const count = n.reduce((c, move) => c + +(field[y + move[0]]?.[x + move[1]] === '*'), 0)
        r += count > 0 ? count : ' '
      } else {
        r += v
      }
    })

    ret.push(r)
  })

  return ret
}
