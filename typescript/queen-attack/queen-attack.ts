type Position = readonly [number, number]

type Positions = {
  white: Position
  black: Position
}

const N = 8

const isInBoard = ([y, x]: Position): boolean => x >= 0 && x < N && y >= 0 && y < N

const equal = (a: Position, b: Position): boolean => a[0] === b[0] && a[1] === b[1]

export const fill2D = <T>(r: number, c: number, d: T): T[][] => Array.from(Array(r), (_) => Array(c).fill(d))

export class QueenAttack {
  public readonly black: Position
  public readonly white: Position

  constructor(positions: Partial<Positions> = {}) {
    this.black = positions.black ? positions.black : [0, N / 2 - 1]
    this.white = positions.white ? positions.white : [N - 1, N / 2 - 1]

    if (!isInBoard(this.black) || !isInBoard(this.white)) {
      throw new Error('Queen must be placed on the board')
    }

    if (equal(this.white, this.black)) {
      throw new Error('Queens cannot share the same space')
    }
  }

  toString(): string {
    const board = fill2D(N, N, '_')

    board[this.white[0]][this.white[1]] = 'W'
    board[this.black[0]][this.black[1]] = 'B'

    return board.map((r) => r.join(' ')).join('\n')
  }

  get canAttack(): boolean {
    return (
      this.black[0] === this.white[0] ||
      this.black[1] === this.white[1] ||
      Math.abs((this.black[1] - this.white[1]) / (this.black[0] - this.white[0])) === 1
    )
  }
}
