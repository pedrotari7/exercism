export class Matrix {
  private r: number[][]
  private c: number[][]

  constructor(str: string) {
    this.r = str.split('\n').map((s) => s.split(' ').map((d) => parseInt(d)))
    this.c = this.r[0].map((_, colIndex) => this.r.map((row) => row[colIndex]))
  }

  get rows(): number[][] {
    return this.r
  }

  get columns(): number[][] {
    return this.c
  }
}
