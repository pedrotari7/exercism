type aliquot = 'perfect' | 'abundant' | 'deficient'

export function classify(n: number): aliquot {
  if (n <= 0) throw new Error('Classification is only possible for natural numbers.')

  if (n === 1) return 'deficient'

  let factors = []
  for (let k = 2; k < Math.sqrt(n); k++) {
    if (n % k === 0 && n !== k) {
      factors.push(k, n / k)
    }
  }

  const s = 1 + factors.reduce((a, v) => a + v, 0)

  if (s === n) return 'perfect'
  if (s > n) return 'abundant'
  return 'deficient'
}
