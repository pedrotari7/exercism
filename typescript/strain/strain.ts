export function keep<T>(a: T[], pred: (e: T) => boolean): T[] {
  const ret: T[] = []

  for (let i = 0; i < a.length; i++) {
    if (pred(a[i])) ret.push(a[i])
  }
  return ret
}

export function discard<T>(a: T[], pred: (e: T) => boolean): T[] {
  const ret: T[] = []

  for (let i = 0; i < a.length; i++) {
    if (!pred(a[i])) ret.push(a[i])
  }
  return ret
}
