export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export const colorCode = (code: string) => `${COLORS.indexOf(code)}`

export const decodedValue = (codes: string[]) =>
  parseInt(
    codes
      .map(colorCode)
      .reduce((a, n) => a + n)
      .slice(0, 2)
  )
