const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export function isPangram(str: string) {
  return [...new Set(str.toLowerCase().split('')).values()].sort().join('').includes(alphabet)
}
