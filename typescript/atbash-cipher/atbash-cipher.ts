const code = (c: string): number => c.charCodeAt(0)
const index = (c: string): number => code(c) - code('a')

const map = (c: string): string => {
  if (code(c) > code('z') || code(c) < code('a')) return c
  return String.fromCharCode(index('z') - index(c) + code('a'))
}

export function encode(plainText: string): string {
  return decode(plainText)
    .match(/.{1,5}/g)!
    .join(' ')
}

export function decode(cipherText: string): string {
  return cipherText
    .split('')
    .filter((c) => c.match(/^[a-z0-9]+$/i))
    .map((c) => map(c.toLowerCase()))
    .join('')
}
