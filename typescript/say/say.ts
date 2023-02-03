export function sayInEnglish(n: number) {
  const conv: { [k: number]: string } = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  if (n < 0 || n > 999_999_999_999) throw new Error('Number must be between 0 and 999,999,999,999.')

  const ret: string[] = []

  if (n === 0) return 'zero'

  while (n > 0) {
    if (n <= 20) {
      ret.push(conv[n])
      break
    }
    if (n < 100) {
      const dez = Math.floor(n / 10) * 10
      ret.push(conv[dez] + '-' + conv[n % dez])
      break
    }

    if (n >= 1_000_000_000) {
      const m = Math.floor(n / 1_000_000_000)

      ret.push(sayInEnglish(m) + ' billion')

      n = n % 1_000_000_000
    }

    if (n >= 1_000_000) {
      const m = Math.floor(n / 1_000_000)

      ret.push(sayInEnglish(m) + ' million')

      n = n % 1_000_000
    }

    if (n >= 1_000) {
      const t = Math.floor(n / 1_000)

      ret.push(sayInEnglish(t) + ' thousand')

      n = n % 1_000
    }

    if (n >= 100) {
      const h = Math.floor(n / 100)

      ret.push(sayInEnglish(h) + ' hundred')

      n = n % 100
    }
  }

  return ret.join(' ')
}
