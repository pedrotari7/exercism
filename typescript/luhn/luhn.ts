export function valid(digitString: string): boolean {
  digitString = digitString.replaceAll(' ', '')
  if (digitString.length <= 1) return false

  return (
    digitString
      .split('')
      .reverse()
      .map((v, i) => (i % 2 === 0 ? parseInt(v) : parseInt(v) * 2))
      .map((v) => (v > 9 ? v - 9 : v))
      .reduce((a, v) => a + v) %
      10 ===
    0
  )
}
