// equilateral, isosceles, or scalene.

export class Triangle {
  constructor(private a: number, private b: number, private c: number) {}

  private hasZeros() {
    return [this.a, this.b, this.c].some((n) => n === 0)
  }

  get isEquilateral() {
    if (this.hasZeros()) return false
    return this.a === this.b && this.b === this.c
  }

  get isIsosceles() {
    if (this.hasZeros()) return false

    return (
      (this.a === this.b && this.a + this.b >= this.c) ||
      (this.a === this.c && this.a + this.c >= this.b) ||
      (this.b === this.c && this.b + this.c >= this.a)
    )
  }

  get isScalene() {
    if (this.hasZeros()) return false
    const ineq = [this.a + this.b >= this.c, this.a + this.c >= this.b, this.b + this.c >= this.a].every((a) => a)
    return ineq && this.a !== this.b && this.b !== this.c && this.a !== this.c
  }
}
