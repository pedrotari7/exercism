export class Gigasecond {
  constructor(private d: Date) {}
  public date(): Date {
    return new Date(this.d.getTime() + 10 ** 12)
  }
}
