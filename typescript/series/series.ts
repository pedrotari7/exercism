export class Series {
  private series: number[]
  constructor(series: string) {
    this.series = series.split('').map((s) => parseInt(s))
  }

  slices(sliceLength: number): number[][] {
    if (this.series.length === 0) throw new Error('series cannot be empty')
    if (this.series.length < sliceLength) throw new Error('slice length cannot be greater than series length')
    if (sliceLength < 0) throw new Error('slice length cannot be negative')
    if (sliceLength === 0) throw new Error('slice length cannot be zero')

    return this.series.reduce<number[][]>((ret, _, idx) => {
      if (idx + sliceLength <= this.series.length) {
        ret.push(this.series.slice(idx, idx + sliceLength))
      }
      return ret
    }, [])
  }
}
