const DAY_MINS = 60 * 24

export class Clock {
  constructor(hours: number, private minutes: number = 0) {
    this.minutes = 60 * hours + this.minutes
    this.normalize()
  }

  private normalize() {
    this.minutes = ((this.minutes % DAY_MINS) + DAY_MINS) % DAY_MINS
  }

  public toString(): string {
    const hours = `${Math.floor(this.minutes / 60)}`.padStart(2, '0')
    const minutes = `${this.minutes % 60}`.padStart(2, '0')

    return `${hours}:${minutes}`
  }

  public plus(minutes: number): Clock {
    this.minutes += minutes
    this.normalize()
    return this
  }

  public minus(minutes: number): Clock {
    this.minutes -= minutes
    this.normalize()
    return this
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes
  }
}
