const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b)
}

export class Rational {
  constructor(private n: number, private d: number) {}

  add(other: Rational): Rational {
    return new Rational(this.n * other.d + this.d * other.n, this.d * other.d).reduce()
  }

  sub(other: Rational): Rational {
    return new Rational(this.n * other.d - this.d * other.n, this.d * other.d).reduce()
  }

  mul(other: Rational): Rational {
    return new Rational(this.n * other.n, this.d * other.d).reduce()
  }

  div(other: Rational): Rational {
    return new Rational(this.n * other.d, this.d * other.n).reduce()
  }

  abs(): Rational {
    return new Rational(Math.abs(this.n), Math.abs(this.d)).reduce()
  }

  exprational(exp: number): Rational {
    return new Rational(Math.pow(this.n, exp), Math.pow(this.d, exp)).reduce()
  }

  expreal(x: number): number {
    return Number(Math.pow(x, this.n / this.d).toPrecision(15))
  }

  reduce(): Rational {
    const div = gcd(this.n, this.d)

    return new Rational(Math.sign(this.d / div) * (this.n / div), Math.abs(this.d / div))
  }
}
