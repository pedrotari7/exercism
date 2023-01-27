export function isValid(isbn: string): boolean {
  return (
    Boolean(isbn) &&
    isbn
      .split('')
      .filter((v) => v !== '-')
      .reduce((a, v, i, arr) => a + parseInt(v === 'X' && i === arr.length - 1 ? '10' : v) * (10 - i), 0) %
      11 ===
      0
  )
}
