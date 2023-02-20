export function count(s: string): Map<string, number> {
  '!&@$%^.:,"'.split('').forEach((p) => (s = s.replaceAll(p, ' ')))

  return s
    .split(' ')
    .map((s) =>
      s
        .toLocaleLowerCase()
        .replace(/^'+|'+$/g, '')
        .trim()
    )
    .filter(Boolean)
    .reduce<Map<string, number>>((a, b) => {
      return a.set(b, (a.get(b) ?? 0) + 1)
    }, new Map())
}
