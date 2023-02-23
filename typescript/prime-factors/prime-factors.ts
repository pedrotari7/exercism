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

export function calculatePrimeFactors(n: number): number[] {
  const ps = primes(n > 10 ** 5 ? 10 ** 6 : n)

  const ret: number[] = []

  for (let p of ps) {
    while (n % p === 0) {
      ret.push(p)
      n /= p
    }
    if (n === 1) break
  }

  return ret
}
