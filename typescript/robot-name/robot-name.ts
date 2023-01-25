const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomLetter = (): string => alphabet[Math.round(alphabet.length * Math.random())]
const randomDigit = (): string => `${Math.round(9 * Math.random())}`

export class Robot {
  private n = ''
  private names = new Set()
  constructor() {
    this.resetName()
  }

  private randomName(): string {
    return randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit()
  }

  public get name(): string {
    return this.n
  }

  public resetName(): void {
    this.n = this.randomName()

    while (this.names.has(this.n)) {
      this.n = this.randomName()
      if (this.names.has(this.n)) continue
      break
    }
    this.names.add(this.n)
  }

  public static releaseNames(): void {}
}
