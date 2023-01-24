export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (code: string): number => COLORS.indexOf(code)

export const decodedResistorValue = (codes: string[]): string => {
  const mag = colorCode(codes[codes.length - 1])
  const value = parseInt(
    codes
      .map(colorCode)
      .reduce((a, n) => a + `${n}`, '')
      .slice(0, 2) + ''.padEnd(mag, '0')
  )

  return value >= 1000 ? `${value / 1000} kiloohms` : `${value} ohms`
}
