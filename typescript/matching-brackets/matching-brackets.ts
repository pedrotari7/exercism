export function isPaired(brackets: string): boolean {
  const valid = ['{', '[', '(']
  const m: { [key: string]: string } = { '}': '{', ']': '[', ')': '(' }
  const open: string[] = []

  for (const b of brackets.split('')) {
    if (valid.includes(b)) {
      open.push(b)
    } else if (b in m) {
      const matching = m[b]
      if (matching !== open[open.length - 1]) return false
      open.pop()
    }
  }

  return open.length === 0
}
