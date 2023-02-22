export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message ?? 'Invalid Input'
  }
}

const directions: Direction[] = ['north', 'east', 'south', 'west']

const moves: Coordinates[] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

const isDirection = (d: Direction | string): d is Direction => {
  return directions.includes(d as Direction)
}

export class Robot {
  public bearing: Direction = 'north'
  public coordinates: Coordinates = [0, 0]

  place({ x, y, direction }: { x: number; y: number; direction: string }): void {
    if (!isDirection(direction)) {
      throw new InvalidInputError('Invalid direction')
    }
    this.bearing = direction
    this.coordinates = [x, y]
  }

  evaluate(instructions: string): void {
    for (const instruction of instructions.split('')) {
      const curH = directions.findIndex((v) => v === this.bearing)
      if (instruction === 'R') {
        this.bearing = directions[(curH + 1) % directions.length]
      }
      if (instruction === 'L') {
        this.bearing = directions[(curH - 1 + directions.length) % directions.length]
      }
      if (instruction === 'A') {
        const move = moves[curH]
        this.coordinates = [move[0] + this.coordinates[0], move[1] + this.coordinates[1]]
      }
    }
  }
}
