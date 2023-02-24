const transpose = <T>(a: T[][]) => a[0]?.map((_, colIndex) => a.map((row) => row[colIndex])) ?? []

export class Crypto {
  public ciphertext: string
  constructor(plainText: string) {
    plainText = plainText
      .toLowerCase()
      .split('')
      .filter((c) => !' @!%.,'.includes(c))
      .join('')

    const c = Math.ceil(Math.sqrt(plainText.length))
    const r = c * (c - 1) < plainText.length ? c : c - 1

    const ret: string[][] = []

    for (let y = 0; y < r; y++) {
      const row = []
      for (let x = 0; x < c; x++) {
        row.push(plainText[y * c + x] ?? ' ')
      }
      ret.push(row)
    }

    this.ciphertext = transpose(ret)
      .map((s) => s.join(''))
      .join(' ')
  }
}
