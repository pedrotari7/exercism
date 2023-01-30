export function sum(nums: number[], limit: number): number {
  let ret = new Set<number>()
  let i = 1

  nums = nums.filter(Boolean)

  while (Math.min(...nums) * i < limit) {
    for (const a of nums) {
      const val = a * i
      if (val < limit) {
        ret.add(val)
      }
    }
    i++
  }

  return [...ret.values()].reduce((acc, v) => acc + v, 0)
}
