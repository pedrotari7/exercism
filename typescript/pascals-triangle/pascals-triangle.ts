export class Triangle {
  public rows: number[][] = [[1]]

  constructor(n: number) {
    for (let k = 1; k < n; k++) {
      const row: number[] = []

      for (let i = 0; i < k + 1; i++) {
        row.push((this.lastRow[i - 1] ?? 0) + (this.lastRow[i] ?? 0))
      }
      this.rows.push(row)
    }
  }

  public get lastRow(): number[] {
    return this.rows[this.rows.length - 1]
  }
}
