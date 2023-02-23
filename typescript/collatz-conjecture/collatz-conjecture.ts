export function steps(n: number): number {
  if (n < 1) throw new Error('Only positive numbers are allowed')

  let i = 0

  while (n > 1) {
    if (n % 2 === 0) n /= 2
    else n = 3 * n + 1
    i++
  }

  return i
}
