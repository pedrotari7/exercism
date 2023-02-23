const primes = (n: number): number[] => {
  const array = new Array(n + 1).fill(true)

  const p = new Set([...Array(n + 1).keys()].map((i) => i))

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (p.has(i)) {
      for (let j = i * i; j < n + 1; j += i) {
        p.delete(j)
      }
    }
  }

  return [...p.values()].splice(2)
}

export function nth(n: number): number {
  if (n < 1) throw new Error('Prime is not possible')

  const ps = primes(10 ** 6)

  return ps[n - 1]
}
