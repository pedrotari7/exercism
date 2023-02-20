export class Anagram {
  private sortedInput: string
  constructor(private input: string) {
    this.sortedInput = this.sort(this.input)
  }

  private sort(s: string): string {
    return s
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('')
      .toLocaleLowerCase()
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter(
      (p) => this.input.toLocaleLowerCase() !== p.toLocaleLowerCase() && this.sort(p) === this.sortedInput
    )
  }
}
