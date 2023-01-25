export class Squares {
  private squares = 0
  private sum = 0

  constructor(count: number) {
    this.squares = Math.pow((count * (count + 1)) / 2, 2)
    this.sum = (count * (count + 1) * (2 * count + 1)) / 6
  }

  get sumOfSquares(): number {
    return this.sum
  }

  get squareOfSum(): number {
    return this.squares
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
