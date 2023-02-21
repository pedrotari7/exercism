export class ComplexNumber {
  constructor(public real: number, public imag: number) {}

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag)
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag)
  }

  public div(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) / other.abs ** 2,
      (this.imag * other.real - this.real * other.imag) / other.abs ** 2
    )
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.imag * other.real + this.real * other.imag
    )
  }

  public get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -1 * Math.sign(this.imag) * this.imag)
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(Math.exp(this.real) * Math.cos(this.imag), Math.exp(this.real) * Math.sin(this.imag))
  }
}
