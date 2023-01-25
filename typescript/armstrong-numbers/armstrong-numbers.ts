export function isArmstrongNumber(number: number): boolean {
  return (
    String(number)
      .split('')
      .map((d) => parseInt(d))
      .reduce((acc, d, _, a) => acc + Math.pow(d, a.length), 0) === number
  )
}
