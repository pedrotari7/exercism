export function find<T>(haystack: T[], needle: T): number | never {
  let low = 0
  let high = haystack.length - 1

  while (high >= low) {
    const mid = Math.round((high + low) / 2)

    const val = haystack[mid]

    if (val === needle) return mid

    if (val >= needle) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  throw new Error('Value not in array')
}
