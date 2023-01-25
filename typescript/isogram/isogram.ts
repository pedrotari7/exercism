const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export function isIsogram(s: string): boolean {
  s = s
    .toLowerCase()
    .split('')
    .filter((c) => alphabet.includes(c))
    .join('')
  return s.length === new Set(s.split('')).size
}
