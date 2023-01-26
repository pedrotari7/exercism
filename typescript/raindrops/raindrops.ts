export function convert(n: number): string {
  let r = ''

  if (n % 3 === 0) r += 'Pling'
  if (n % 5 === 0) r += 'Plang'
  if (n % 7 === 0) r += 'Plong'

  return r ? r : String(n)
}
