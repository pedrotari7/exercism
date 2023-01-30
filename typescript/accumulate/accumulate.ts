export function accumulate<T, K>(list: T[], accumulator: (el: T) => K): K[] {
  const ret: K[] = []

  for (const el of list) {
    ret.push(accumulator(el))
  }

  return ret
}
